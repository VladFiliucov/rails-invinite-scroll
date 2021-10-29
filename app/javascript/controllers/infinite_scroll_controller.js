import { Controller } from "stimulus"
import Rails from '@rails/ujs';

export default class extends Controller {
  static targets = ["entries", "pagination"]

  initialize() {
    this.footer = document.querySelector('footer');
    this.intersectionObserver = new IntersectionObserver(entries => this.processIntersectionEntries(entries))
  }
  connect() {
    this.intersectionObserver.observe(this.footer)
  }
  disconnect() {
    this.intersectionObserver.unobserve(this.footer)
  }

  scroll() {
    return false;
  //   const body = document.body;
  //   const html = document.documentElement;

  //   const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)

  //   // if (footer) {
  //   //   this.observer.observe(footer);
  //   // }
  //   // if (window.pageYOffset >= height - window.innerHeight) {
  //   //   if (url) this.loadMore(url);
  //   // }
  }

  processIntersectionEntries(entries) {
    entries.forEach(entry => {
      // fetch new posts only when footer is getting into view port
      if (entry.intersectionRatio > 0){
        const url = this.paginationTarget.querySelector("a[rel='next']")?.href
        if (url) this.loadMore(url);
      }
    }, { threshold: 1 })
  }

  loadMore(url) {
    Rails.ajax({
      type: 'GET',
      url,
      dataType: 'json',
      success: (data) => {
        this.entriesTarget.insertAdjacentHTML('beforeend', data.entries);
        this.paginationTarget.innerHTML = data.pagination;
      }
    });
  }
}
