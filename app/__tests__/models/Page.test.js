import Page from './../../models/Page.js'

describe('Page', () => {

	let page

	beforeEach(() => {
		page = new Page("","")
	})

	it(`A new page should have title and summary equal to the parameters and
		empty tags and contents`, () => {
			const expected = {
				title: "",
				summary: "",
				content: [],
				tags: []
			}
			expect(page).toEqual(expected)
	})

	it(`Can add content with a type of text and a correct position`, () => {

			page.addTextContent("title1", "value1")

			const expected = [{
	      title: "title1",
	      type: "text",
	      value: "value1",
	      position: 0
	    }]

			expect(page.content.length).toBe(1)
			expect(page.content).toEqual(expected)

			page.addTextContent("title2", "value2")

			expected.push({
	      title: "title2",
	      type: "text",
	      value: "value2",
	      position: 1
	    })

			expect(page.content.length).toBe(2)
			expect(page.content).toEqual(expected)
	})

	it(`Can add content with a type of img and a correct position`, () => {

			page.addImageContent("title1", "value1")

			const expected = [{
	      title: "title1",
	      type: "img",
	      value: "value1",
	      position: 0
	    }]

			expect(page.content.length).toBe(1)
			expect(page.content).toEqual(expected)

			page.addImageContent("title2", "value2")

			expected.push({
	      title: "title2",
	      type: "img",
	      value: "value2",
	      position: 1
	    })

			expect(page.content.length).toBe(2)
			expect(page.content).toEqual(expected)
	})

	it(`Can add content with a type of code and a correct position`, () => {

			page.addCodeBlockContent("title1", "value1")

			const expected = [{
	      title: "title1",
	      type: "code",
	      value: "value1",
	      position: 0
	    }]

			expect(page.content.length).toBe(1)
			expect(page.content).toEqual(expected)

			page.addCodeBlockContent("title2", "value2")

			expected.push({
	      title: "title2",
	      type: "code",
	      value: "value2",
	      position: 1
	    })

			expect(page.content.length).toBe(2)
			expect(page.content).toEqual(expected)
	})

	it(`Can add tags`, () => {
			page.addTag("one")
			let expected = ["one"]
			expect(page.tags).toEqual(expected)
			page.addTag("two")
			expected.push("two")
			expect(page.tags).toEqual(expected)
	})

	it(`Can check if content is valid (returns true when is valid)`, () => {
			page.title = "title"
			page.summary = "summary"
			page.addTextContent("title", "summary")
			let result = page.isPageValid()
			expect(result).toBe(true)
	})

	it(`Can check if content is valid (returns false when title is null or length 0)`, () => {

			page.summary = "summary"
			page.addTextContent("title", "summary")

			page.title = null
			let result = page.isPageValid()
			expect(result).toBe(false)
			page.title = ""
			result = page.isPageValid()
			expect(result).toBe(false)
	})

	it(`Can check if content is valid (returns false when summary is null or length 0)`, () => {
		page.title = "title"
		page.addTextContent("title", "summary")

		page.summary = null
		let result = page.isPageValid()
		expect(result).toBe(false)
		page.summary = ""
		result = page.isPageValid()
		expect(result).toBe(false)
	})

	it(`Can check if content is valid (returns false when text content title
		is null or length 0)`, () => {
			page.title = "title"
			page.summary = "summary"

			page.addTextContent(null, "summary")
			let result = page.isPageValid()
			expect(result).toBe(false)
			page.content[0].title = ""
			result = page.isPageValid()
			expect(result).toBe(false)
	})


		it(`Can check if content is valid (returns false when text content value
			is null or length 0)`, () => {
				page.title = "title"
				page.summary = "summary"

				page.addTextContent("title", null)
				let result = page.isPageValid()
				expect(result).toBe(false)
				page.content[0].summary = ""
				result = page.isPageValid()
				expect(result).toBe(false)
		})

})
