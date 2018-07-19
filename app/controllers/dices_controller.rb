class DicesController < ApplicationController
  def home
    @character=Character.new
  end

  def hundred
    result={}
    result["val"]=rand(1..100)
    render json:result
  end

  def twenty
    result={}
    result["val"]=rand(1..20)
    render json:result
  end

  def ten
    result={}
    result["val"]=rand(1..10)
    render json:result
  end

  def four
    result={}
    result["val"]=rand(1..4)
    render json:result
  end
end
