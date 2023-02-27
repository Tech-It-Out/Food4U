import axios from 'axios'
import config from "../config";

export const getOrderHistoryFromAPI = token => {
  return axios({
    url: config.apiUrl + '/orders',
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
}

export const updateOrderItemWithQuantity = (quantity, orderId, orderItemId, token) => {
  return axios({
    url: config.apiUrl + '/orders/' + orderId + '/orderItem/' + orderItemId,
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${token}`
    },
    data: {
      orderItem: {
        quantity: quantity
      }
    }
  })
}

export const createNewOrderItemWithData = (orderId, token, product) => {
  return axios({
    url: config.apiUrl + '/orders/' + orderId + '/orderItem',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`
    },
    data: {
      orderItem: {
        productName: product.name,
        price: product.price,
        quantity: 1,
        productId: product._id.toString()
      }
    }
  })
}

export const createNewOrder = token => {
  return axios({
    url: config.apiUrl + '/orders',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`
    },
    data: {
      order: {
        status: 'cart'
      }
    }
  })
}

export const deleteOrderItem = (orderId, orderItemId, token) => {
  return axios({
    url: config.apiUrl + '/orders/' + orderId + '/orderItem/' + orderItemId,
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
}

export const updateOrderStatus = (token, orderId, orderStatus) => {
  return axios({
    url: config.apiUrl + '/orders/' + orderId,
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${token}`
    },
    data: {
      order: {
        status: orderStatus
      }
    }
  })
}
