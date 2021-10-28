require "test_helper"

class ApplicationSystemTestCase < ActionDispatch::SystemTestCase
  driven_by :selenium,
            using: (ENV["HEADLESS_CHROME"] ? :headless_chrome : :chrome),
            screen_size: [1400, 1400] do |options|
    options.add_argument("no-sandbox")
  end

  def setup
    Capybara.server = :puma, { Silent: true }
    super
  end
end
