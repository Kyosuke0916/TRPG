class CharactersController < ApplicationController
  def new
    @character=Character.new
  end

  def create
  end

  def index
    @character=Character.all
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end



  def three
    result={}
    result["val"] =rand(1..6)+rand(1..6)+rand(1..6)
    render json:result
  end

  def three3
    result={}
    result["val"] =rand(1..6)+rand(1..6)+rand(1..6)+3
    render json:result
  end

  def two6
    result={}
    result["val"]=rand(1..6)+rand(1..6)+6
    render json:result
  end
end
