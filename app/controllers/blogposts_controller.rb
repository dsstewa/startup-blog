require 'pry'
class BlogpostsController < ApplicationController
    
    def index
        blogs = Blogpost.all
        render json: blogs
    end

    def create 
        blog = Blogpost.create(
            firstname: params[:firstname],
            lastname: params[:lastname],
            subject: params[:subject],
            content: params[:content],
            uuid: params[:uuid]
        )
        blog.save

        render json: BlogpostSerializer.new(blog)
    end 

    def show  
        post = Blogpost.find_by(id: params[:id])
        render json: BlogpostSerializer.new(post)
    end


    def update  
        binding.pry
        post = Blogpost.find_by(id: params[:id])
        render json: BlogpostSerializer.new(post)
    end

    def destroy
        post= Blogpost.find_by(id: params[:id]).destroy
        render json: BlogpostSerializer.new(post)
    end 


end
