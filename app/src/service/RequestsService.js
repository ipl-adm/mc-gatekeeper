import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

class RequestsService {

    // config: axios config containing auth bearer header
    getAllRequests(config) {
        return axios.get(`${API_BASE_URL}/api/v1/internal/requests`, config)
    }

    approveRequestAdmin(requestID, config) {
        return axios.patch(`${API_BASE_URL}/api/v1/internal/requests/${requestID}`, {
                status: "Approved",
                processedTimestamp: new Date().toISOString(),
                admin: 'admin' }, config)
    }

    denyRequestAdmin(requestID, config) {
        return axios.patch(`${API_BASE_URL}/api/v1/internal/requests/${requestID}`, {
                status: "Denied",
                processedTimestamp: new Date().toISOString(),
                admin: 'admin' }, config)
    }
    ///////////////////////////////External API service call below///////////////////
    createRequest(data) {
        return axios.post(`${API_BASE_URL}/api/v1/requests/`, data)
    }

    getRequestByEncodedID(encodedID) {
        return axios.get(`${API_BASE_URL}/api/v1/requests/${encodedID}`)
    }

    approveRequest(requestID, admToken) {
        return axios.patch(`${API_BASE_URL}/api/v1/requests/${requestID}?adm=${admToken}`, {
            status: "Approved",
            processedTimestamp: new Date(),
        })
    }

    denyRequest(requestID, admToken) {
        return axios.patch(`${API_BASE_URL}/api/v1/requests/${requestID}?adm=${admToken}`, {
            status: "Denied",
            processedTimestamp: new Date(),
        })
    }

    // verify valid admin token first before displying any info in the action page
    verifyAdminToken(admToken) {
        return axios.get(`${API_BASE_URL}/api/v1/verify?adm=${admToken}`)
    }
}

export default new RequestsService();