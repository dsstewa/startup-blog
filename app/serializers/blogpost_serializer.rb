class BlogpostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :firstname, :lastname, :subject, :content, :id
end
