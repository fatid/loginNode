# loginNode

Bu NodeJs ve VueJs ile hazırlanan login ve blog projesinde kullanılan repodur.

# Blogs

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /api/blogs | `GET` | Empty | List all blogs. |
| /api/blogs | `POST` | {'title':'foo', 'category':'id', 'content':'Turkey', date:1990,  author: 9.7 , score: 9.7 } | Create a new blog. |
| /api/blogs/:blog_id | `GET` | Empty | Get a blog. |
| /api/blogs/:blog_id | `PUT` | {'name':'foo', 'surname':'bar'} | Update a blog with new info. |
| /api/blogs/:blog_id | `DELETE` | Empty | Delete a blog. |
| /api/blogs/top10 | `GET` | Empty | Get the top 10 blogs. |
| /api/blogs/between/:start_year/:end_year | `GET` | Empty | blogs between two dates. |