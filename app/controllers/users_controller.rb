class UsersController < ApplicationController
  def new
    @user=User.new
  end

  def create
    @user=User.new(user_params)
    if @user.save
      log_in(@user)
      redirect_to @user
    else
      render :new
    end
  end

  def show
  end

  def edit
  end

  def update
  end

  def user_params
    params.require(:user).permit(:name,:email,:password,:password_confirmation)
  end

  private
  def member_params
    params.require(:member).permit(:login_name, :email, :password, :password_confirmation)
  end
end