import { ref } from 'vue'
import axios from 'axios'

export default function useAxios() {
  const isLoading = ref(false)
  const isError = ref(false)

  async function execRequest(url, method = 'GET') {
    try {
      isLoading.value = true
      
      const res = await axios[method.toLowerCase()](url)

      isLoading.value = false

      return res.data
    } catch (e) {
      isError.value = true
      isLoading.value = false
    } finally {
      isLoading.value = false
    }
  }

  return {
    isLoading: isLoading.value,
    isError: isError.value,
    execRequest
  }
}
