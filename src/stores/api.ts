// Definitions
type Fetcher = typeof window.fetch

// API
class Api {
  private fetcher: Fetcher

  constructor(fetcher: Fetcher) {
    this.fetcher = fetcher
  }

  public getPost(id: number) {
    return this.fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }

  public getPosts() {
    return this.fetch('https://jsonplaceholder.typicode.com/posts')
  }

  public getComments(postId: number) {
    return this.fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    )
  }

  public getUsers() {
    return this.fetch('https://jsonplaceholder.typicode.com/users')
  }

  private async fetch(input: RequestInfo, init?: RequestInit) {
    return (await this.fetcher(input, init)).json()
  }
}

// Exports
export default Api
