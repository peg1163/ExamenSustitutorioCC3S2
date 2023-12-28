class Movie < ActiveRecord::Base

  #### Part 1 ####
  # implement this method. Remeber to exclude [self]
  # (the current movie) from your return value
  def others_by_same_director
    return Movie.where(director: self.director).where.not(id: self.id)
  end
end
