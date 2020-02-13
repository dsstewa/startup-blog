
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


end
