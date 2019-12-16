class CharactersController < ApplicationController
  def new
    @character=Character.new
  end

  def create
    @character=current_user.characters.new(character_skill_params)
    if @character.save
      redirect_to @character
    else
      render :skill_set
    end
  end

  def index
    @characters=current_user.characters.all
  end

  def show
    @character=current_user.characters.find(params[:id])
  end

  def edit
    @character=current_user.characters.find(params[:id])
  end

  def update
    @character=current_user.characters.find(params[:id])
    if @character.update_attributes(character_skill_params)
      redirect_to characters_path
    else
      render :edit
    end
  end

  def destroy
    @character=current_user.characters.find(params[:id])
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
    params.require(:character).permit(:str, :con, :pow, :dex, :app, :siz, :int, :edu,:avoid, :kick, :kumituki, :kobusi, :dutuki, :touteki, :masharu, :kenjyuu, :sabumasi, :shottogun, :masingun, :raihuru, :oukyuu, :kagi, :kakusu, :kakureru, :kikimimi, :sinobi, :shasin, :seisin, :tuiseki, :touhan, :toshokan, :mebosi, :unten, :shuri, :sousa, :jyouba, :suiei, :seisaku, :soujyuu, :tyouyaku, :denki, :nabi, :hensou, :iiku, :sinyou, :settoku, :negiri, :native, :first, :second, :igaku, :okaruto, :kagaku, :coc, :art, :keiri, :kouko, :comp, :sinri, :human, :seibutu, :tisitu, :densi, :tenmon, :hakubutu, :buturi, :houritu, :yakugaku, :rekisi, :name)
  end
end
