require 'test_helper'

class DicesControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get dices_home_url
    assert_response :success
  end

end
