class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :entryable_type
      t.integer :entryable_id
      t.string :name
      t.string :last_name
      t.string :username
      t.date :dob
      t.string :password_digest

      t.timestamps
    end
  end
end
