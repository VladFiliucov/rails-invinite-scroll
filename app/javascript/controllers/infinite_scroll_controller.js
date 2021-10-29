import { Controller } from "stimulus"
import Rails from '@rails/ujs';

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio === 1){
      console.log('footer visible');
    }
  });
}, { threshold: 1 })

export default class extends Controller {
  static targets = ["entries", "pagination"]


  scroll() {
    const body = document.body;
    const html = document.documentElement;
    const url = this.paginationTarget.querySelector("a[rel='next']")?.href

    const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
    const footer = document.querySelector('footer');

    if (footer) {
      observer.observe(footer);
    }
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
