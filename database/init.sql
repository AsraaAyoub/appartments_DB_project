BEGIN;

DROP TABLE IF EXISTS users, blog_posts CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  address VARCHAR(255) NOT NULL,
  size INTEGER,
  rooms INTEGER,
  price INTEGER,
  price_range INTEGER,
  location VARCHAR(255)
);

CREATE TABLE blog_posts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  review_content TEXT
);

        
INSERT INTO posts (contact , address, size, rooms, price,price_range, photos) VALUES
  ('
;

INSERT INTO blog_posts (review_content, user_id) VALUES
  ('Announcing of invitation principles in.', 1),
  ('Peculiar trifling absolute and wandered yet.', 2),
  ('Far stairs now coming bed oppose hunted become his.', 3),
  ('Curabitur arcu quam, imperdiet ac orci ac.', 4),
  ('Aenean blandit risus sed pellentesque.', 5)
;

COMMIT;