Rottenpotatoes::Application.routes.draw do
  get '/movies/:id/show_by_director' => 'movies#show_by_director', as: 'show_by_director_movie'
  resources :movies
  root :to => redirect('/movies')
end
