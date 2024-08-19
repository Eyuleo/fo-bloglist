const dummy = (blogs) => {
	return 1
}

const totalLikes = (blogs) => {
	const reducer = (sum, item) => {
		return sum + item.likes
	}

	return blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
	const reducer = (favorite, blog) => {
		return favorite.likes > blog.likes ? favorite : blog
	}
	return blogs.reduce(reducer, {})
}
module.exports = {
	dummy,
	totalLikes,
	favoriteBlog,
}
