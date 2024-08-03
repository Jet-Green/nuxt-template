import type { FoodListItem } from '~/types/food-list-item.interface'
import type { Rest } from '../types/rest.interface'
import type { FoodListItemFromDb } from '~/types/food-list-item-from-db.interface'


export default {
  /**
   * pass a Hall type object and make a POST request to a /hall
   * @param rest 
   * @returns 
   */
  create(rest: Rest): Promise<any> {
    return useApiFetch('/rest', { method: 'POST', body: { rest } })
  },
  get(): Promise<any> {
    return useApiFetch('/rest/all', { method: 'GET' })
  },
  getRestsName(): Promise<any> {
    return useApiFetch('/rest/rests-name', { method: 'GET' })
  },

  getManagersOfRest(rest_id: string): Promise<any> {
    return useApiFetch(`/rest/get-managers?rest_id=${rest_id}`, { method: 'GET' })
  },
  deleteRest(_id: string): Promise<any> {
    return useApiFetch(`/rest/delete?rest_id=${_id}`, { method: 'GET' })
  },
  getByAlias(alias: string): Promise<any> {
    return useApiFetch('/rest/one-by-alias', { method: 'POST', body: { alias } })
  },
  getById(_id: string): Promise<any> {
    return useApiFetch(`/rest/by-id?_id=${_id}`, {
      method: 'GET'
    })
  },
  getByIds(_ids: string[]): Promise<any> {
    return useApiFetch('/rest/by-ids', {
      method: 'POST',
      body: {
        _ids: _ids
      }
    })
  },
  uploadImages(formData: FormData, _id: string): Promise<any> {
    return useApiFetch(`/rest/images?rest_id=${_id}`, { method: 'POST', headers: { 'Content-Type': 'multipart/form-data' }, body: formData })
  },
  sendFoodListItemToMenu(_id: string, restId: string): Promise<any> {
    return useApiFetch('/rest/menu', {
      method: 'POST',
      body: {
        foodListItemId: _id,
        restId
      }
    })
  },
  /**
   * create new food list item 
   */
  createFoodListItem(body: any): Promise<any> {
    return useApiFetch('/rest/food-list', {
      method: 'POST',
      body: body
    })
  },

  uploadFoodListItemImages(restId: string, foodListItemId: string, fd: FormData): Promise<any> {
    return useApiFetch(`/rest/food-list-images?rest_id=${restId}&item_id=${foodListItemId}`, { method: 'POST', headers: { 'Content-Type': 'multipart/form-data' }, body: fd })
  },
  moveFoodItemToMenu(body: {
    restId: string,
    foodListItemId: string
  }) {
    return useApiFetch('/rest/menu', {
      method: 'POST',
      body: body
    })
  },
  updateFoodListItem(
    restId: string,
    foodListItemId: string,
    foodListItem: FoodListItem
  ) {
    return useApiFetch(`/rest/update-food-list?rest_id=${restId}&item_id=${foodListItemId}`, {
      method: 'PUT',
      body: {foodListItem}
    })
  },
  // updateFoodListItemImages(restId: string, foodListItemId: string, fd: FormData): Promise<any> {
  //   return useApiFetch(`/rest/update-food-list-images?rest_id=${restId}&item_id=${foodListItemId}`, {
  //     method: 'PUT',
  //     headers: { 'Content-Type': 'multipart/form-data' },
  //     body: fd
  //   })
  // },

  deleteFromMenu(menuItemId: string, restId: string) {
    return useApiFetch(`/rest/delete-from-menu?rest_id=${restId}&menu_item_id=${menuItemId}`, { method: 'DELETE' })
  },
  update(rest: Rest, restId: string) {
    return useApiFetch(`/rest?rest_id=${restId}`, {
      method: 'PUT',
      body: { rest },
    })
  },
}