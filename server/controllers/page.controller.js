import Page from '../models/page';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';


/**
 * Get all pages
 * @param req
 * @param res
 * @returns void
 */
export function getPages(req, res) {
  Page.find().sort({ title: 1 }).exec((err, pages) => {
    if (err) {
      res.status(500).send(err);
    }

    res.json({ pages });
  });
}

/**
 * Save a Page
 * @param req
 * @param res
 * @returns void
 */
export function addPage(req, res) {
  if (!req.body.page.title || !req.body.page.type) {
    res.status(403).end();
  }

  const newPage = new Page(req.body.page);

    // sanatize inputs
  newPage.title = sanitizeHtml(newPage.title);
  newPage.type = sanitizeHtml(newPage.type);

  newPage.cuid = cuid();
  newPage.slug = slug(newPage.title.toLowerCase(), { lowercase: true });

  newPage.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }

    res.json({ page: saved });
  });
}

/**
 * Get a single page
 * @param req
 * @param res
 * @returns void
 */
export function getPage(req, res) {
  Page.findOne({ slug: req.params.slug }).exec((err, page) => {
    if (err) {
      res.status(500).send(err);
    }

    res.json({ page });
  });
}

/**
 * Delete a page
 * @param req
 * @param res
 * @returns void
 */
export function deletePage(req, res) {
  Page.findOne({ slug: req.params.slug }).exec((err, page) => {
    if (err) {
      res.status(500).send(err);
    }

    page.remove(() => {
      res.status(200).end();
    });
  });
}
