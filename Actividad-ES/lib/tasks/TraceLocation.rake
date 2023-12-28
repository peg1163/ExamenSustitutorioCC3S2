require 'rack/mock'
require 'trace_location'

env = Rack::MockRequest.env_for('http://localhost:3000/movies')

TraceLocation.trace do
  status, headers, body = Rails.application.call(env)
end
