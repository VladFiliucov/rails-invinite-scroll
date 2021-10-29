import { Controller } from "stimulus"
import Rails from '@rails/ujs';

export default class extends Controller {
  static targets = ["entries", "pagination"]

  scroll() {
    const body = document.body;
    const html = document.documentElement;
    const url = this.paginationTarget.querySelector("a[rel='next']")?.href

    const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)

    // if (window.pageYOffset >= height - window.innerHeight) {
    //   if (url) this.loadMore(url);
    // }
  }

  loadMore(url) {
    Rails.ajax({
      type: 'GET',
      url,
      dataType: 'json',
      success: (data) => {
        // console.log('Got more data', data);
        // console.log('what', this.entriesTarget);
        this.entriesTarget.insertAdjacentHTML('beforeend', data.entries);
        this.paginationTarget.innerHTML = data.pagination;
      }
    });
  }
}
