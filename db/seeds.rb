# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.destroy_all
Subject.destroy_all
SubjectFollow.destroy_all


porkchop = User.create!(username: 'porkchop', password: 'porkchop')
opp = User.create!(username: 'opp', password: 'porkchop')
porkchop2 = User.create!(username: 'porkchop2', password: 'porkchop')


mcat_biology = Subject.create!(title: 'MCAT Biology', owner_id: porkchop.id)
norwegian = Subject.create!(title: 'Norwegian', owner_id: porkchop.id)
react = Subject.create!(title: 'React', owner_id: opp.id)
redux = Subject.create!(title: 'Redux', owner_id: opp.id)
jbuilder = Subject.create!(title: 'jBuilder', owner_id: opp.id)
css = Subject.create!(title: 'CSS', owner_id: opp.id)
active_recored = Subject.create!(title: 'ActiveRecord', owner_id: opp.id)



SubjectFollow.create!(follower_id: opp.id, subject_id: norwegian.id)
SubjectFollow.create!(follower_id: porkchop.id, subject_id: react.id)
