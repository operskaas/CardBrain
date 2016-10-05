# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.destroy_all
porkchop = User.create!(username: 'porkchop', password: 'porkchop')
opp = User.create!(username: 'opp', password: 'porkchop')
porkchop2 = User.create!(username: 'porkchop2', password: 'porkchop')


Subject.destroy_all

mcat_biology = Subject.create!(title: 'MCAT Biology', owner_id: porkchop.id)
norwegian = Subject.create!(title: 'Norwegian', owner_id: porkchop.id)
