class BlogpostsController < ApplicationController
    
    def index
    blogs = Blogpost.all
    render json: blogs
    end

end
