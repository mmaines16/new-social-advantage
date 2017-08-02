import Member from '../models/member';
import cuid from 'cuid';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all Members
 * @param req
 * @param res
 * @returns void
 */
export function getMembers(req, res) {
  Member.find().sort({ email: 1 }).exec((err, members) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ members });
  });
}

/**
 * Save a member
 * @param req
 * @param res
 * @returns void
 */
export function addMember(req, res) {
  if (!req.body.member.email || !req.body.member.password || !req.body.member.name.given || !req.body.member.name.family) {
    res.status(403).end();
  }

  const newMember = new Member(req.body.member);

  // Let's sanitize inputs
  newMember.email = sanitizeHtml(newMember.email);
  newMember.password = sanitizeHtml(newMember.password);
  newMember.name.given = sanitizeHtml(newMember.name.given);
  newMember.name.family = sanitizeHtml(newMember.name.family);

  newMember.cuid = cuid();

  newMember.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ member: saved });
  });
}

/**
 * Get a single member
 * @param req
 * @param res
 * @returns void
 */
export function getMember(req, res) {
  Member.findOne({ cuid: req.params.cuid }).exec((err, member) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ member });
  });
}

/**
 * Delete a member
 * @param req
 * @param res
 * @returns void
 */
export function deleteMember(req, res) {
  Member.findOne({ cuid: req.params.cuid }).exec((err, member) => {
    if (err) {
      res.status(500).send(err);
    }

    member.remove(() => {
      res.status(200).end();
    });
  });
}
