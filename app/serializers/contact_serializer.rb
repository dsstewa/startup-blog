class ContactSerializer
  include FastJsonapi::ObjectSerializer
  attributes :firstname, :lastname, :email, :uuid, :id
end
