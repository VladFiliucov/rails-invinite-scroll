source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.7.2"

gem "active_type"
gem "autoprefixer-rails"
gem "bcrypt", "~> 3.1.7"
gem "bootsnap", ">= 1.4.4", require: false
gem "coffee-rails"
gem "pg", "~> 1.1"
gem "pgcli-rails"
gem "puma", "~> 5.0"
gem "rack-canonical-host"
gem "rails", "~> 6.1.4"
gem "redis", "~> 4.0"
gem "sass-rails"
gem "sidekiq"
gem "turbolinks", "~> 5"
gem "webpacker"

group :production do
  gem "postmark-rails"
end

group :development do
  gem "amazing_print"
  gem "annotate"
  gem "letter_opener"
  gem "listen", "~> 3.3"
  gem "web-console", ">= 4.1.0"
end

group :development, :test do
  gem "brakeman", require: false
  gem "bundler-audit", require: false
  gem "byebug"
  gem "dotenv-rails"
  gem "launchy"
  gem "rubocop", require: false
  gem "rubocop-minitest", require: false
  gem "rubocop-performance", require: false
  gem "rubocop-rails", require: false
end

group :test do
  gem "capybara", ">= 3.26"
  gem "minitest-ci", require: false
  gem "selenium-webdriver"
  gem "shoulda-context"
  gem "shoulda-matchers"
  gem "webdrivers"
end
