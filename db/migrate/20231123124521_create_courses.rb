class CreateCourses < ActiveRecord::Migration[7.0]
  def change
    create_table :courses do |t|
      t.string :title
      t.integer :price
      t.string :description
      t.date :date
      t.string :location
      t.integer :teacher_id

      t.timestamps
    end
  end
end
