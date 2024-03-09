import time
import hashlib
import hmac
from email import utils

# Specifying the project’s key
SECRET_KEY = '3ad287a648228332b757'

# Specifying request type
verb = 'GET'

# Calculate [md5](https://en.wikipedia.org/wiki/MD5) checksum for the request's HTTP body.
# Note: Taking into account that in our example, we are sending an HTTP GET request,
# and the request does not have anything in its HTTP body, we use an empty string as an input to the md5 hash function.
# If we were to send an HTTP POST request with, for example, JSON in the request's body,
# we would have to pass the JSON as the input to the md5 hash function.
content_md5 = hashlib.md5(b'').hexdigest()

# Content-Type header
content_type = 'application/json'

# Current time, e.g. 1541423681
timestamp = 1709957400
# Date header ('Mon, 05 Nov 2018 13:14:41 GMT')
date_header = utils.formatdate(timestamp, usegmt=True)

# The request URI
uri = '/files/?limit=1&stored=true'

# Forming the final string: concatenating
sign_string = '\n'.join([verb, content_md5, content_type, date_header, uri])

# Calculating the signature,
# the result may look like this: "3cbc4d2cf91f80c1ba162b926f8a975e8bec7995"
signature = hmac.new(SECRET_KEY.encode(), sign_string.encode(), hashlib.sha1).hexdigest()
print(signature)