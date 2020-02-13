class BlogpostsController < ApplicationController
    
    def index
        blogs = Blogpost.all
        render json: blogs
    end

    def create 
        blogs = Blogpost.all
        binding.pry
        render json: blogs
    end 


end
