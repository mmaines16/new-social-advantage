import { Router } from 'express';
import * as MemberController from '../controllers/member.controller';

const router = new Router();

// Get all Members
router.route('/members').get(MemberController.getMembers);

// Get one Member by cuid
router.route('/members/:cuid').get(MemberController.getMember);

// Add a new Member
router.route('/members').post(MemberController.addMember);

// Delete a Member by cuid
router.route('/members/:cuid').delete(MemberController.deleteMember);

export default router;
