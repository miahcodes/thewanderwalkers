# Require any additional compass plugins here.


# Set this to the root of your project when deployed:
http_path = "/"

# Production assets URL
#http_images_path = "http://localhost/thg_clients/sofia_acosta/kristin-fritz/wp-content/themes/kristinfritz/images"

css_dir = "../"
sass_dir = "/"
images_dir = "../../img"
javascripts_dir = "../../js"
fonts_dir = "../fonts"

# Development
output_style = :nested
environment = :development

# Production
# output_style = :compressed
# environment = :production

# To enable relative paths to assets via compass helper functions Uncomment the following line:
relative_assets = true

line_comments = false
color_output = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass assets/scss scss && rm -rf sass && mv scss sass
preferred_syntax = :scss
