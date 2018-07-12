class DicesController < ApplicationController
  def home

  end

  def hundred
    result={}
    result["val"]=rand(1..100)
    render json:result
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
