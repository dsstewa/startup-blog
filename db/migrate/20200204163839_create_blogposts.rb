class CreateBlogposts < ActiveRecord::Migration[6.0]
  def change
    create_table :blogposts do |t|
      t.string :subject
      t.text :content
      t.string :firstname
      t.string :lastname
      t.string :uuid
      t.timestamps
    end
  end
end
