class CharactersController < ApplicationController
  def new
    @character=Character.new
  end

  def create
    @character=Character.new(character_skill_params)
    @character.save
    if @character.save
      redirect_to @character
    else
      render :skill_set
    end
  end

  def index
    @character=Character.all
  end

  def show
    @character=Character.find(params[:id])
  end

  def edit
    @character=Character.all
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

  def skill_set
    @character = Character.new(character_status_params)
    render :skill_set
  end

  protected

  def character_status_params
    params.require(:character).permit(:str, :con, :pow, :dex, :app, :siz, :int, :edu)
  end

  def character_skill_params
    params.require(:character).permit(:str, :con, :pow, :dex, :app, :siz, :int, :edu,:avoid, :kick)
  end
end
