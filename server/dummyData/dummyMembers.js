import Member from '../models/member';

export default function () {
  Member.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const member1 = new Member({
      email: 'mmaines16@gmail.com',
      password: 'demopassword',
      name: {
        given: 'Mason',
        family: 'Maines',
      },
      cuid: 'lasqgzl3q04ld7453ualdn8sy',
      admin: {
        isAdmin: true,
        scopes: ['admin-all'],
      },
    });
    const member2 = new Member({
      email: 'mmaines@cisco.com',
      password: 'demopass',
      name: {
        given: 'Mason',
        family: 'Maines',
      },
      cuid: 'syuqgzm7k04ld7453ualak7th',
      admin: {
        isAdmin: false,
        scopes: [] },
    });

    Member.create([member1, member2], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}
