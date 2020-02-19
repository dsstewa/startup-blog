class ContactsController < ApplicationController

    def index
        contacts = Contact.all
        render json: contacts
        end

        def create 
            contact = Blogpost.create(
                firstname: params[:firstname],
                lastname: params[:lastname],
                email: params[:email],
                uuid: params[:uuid]
            )
            contact.save
    
            render json: ContactSerializer.new(contact)
        end


end
