import Page from '../models/page';

export default function () {
  Page.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const optinContent = {
      preheader: 'get your 100% free demo bait',
      header: 'The Best Bait to Convert Leads, Improve Your Lead Opt In Rate by 80%',
      postheader: 'This Bait Really Works! I Use It For All My Opt Ins!',
      benifits: [],
    };

    const salesContent = {
      preheader: 'The New Social Advantage Email Market Group for ECommernce',
      header: 'Join the ECommerce Email Markeing and Get Access to the Latest, Greatest, And Most Relevent Email Marketing Strategies, Practices and Theories Every Week',
      postheader: 'Learn Everything you Need to Know for the Fraction of Consulting or Online Course Fees',
      benifits: [
        'Direct Access to Me 24/7',
        'Recieve video training every week',
        'Live Courses every 2 weeks',
      ],
    };

    const thankYouContent = {
      preheader: 'Thank You for Joining The New Social Advantage Email Market Group for ECommernce!',
      header: 'Lets Get You Access to the Latest and Greatest Information and Community Support, but Just a Few Quick Words..',
      postheader: "Don't Skip Ahead Yet! Just a Few Important Things I Need to Tell You",
      benifits: [],
    };

    const unsubContent = {
      preheader: 'We Are Sorry to See You Leave',
      header: 'We are About to Cancel Your Membership for The New Social Advantage Email Market Group for ECommernce',
      postheader: 'I Wont Stop You, But First Let Me Tell you Why Your About to Make A Huge Mistake',
      benifits: [],
    };

    const optinPage = new Page({ title: 'Optin Page Demo', type: 'optin', slug: 'optin-page-demo', cuid: 'cikqgkv4q01ck7453ualdn8jx', content: optinContent });
    const salesPage = new Page({ title: 'Sales Page Demo', type: 'sales', slug: 'sales-page-demo', cuid: 'cicsukv4q01ck3643ualdn3nf', content: salesContent });
    const thankYouPage = new Page({ title: 'Thak You Page Demo', type: 'thank-you', slug: 'thank-you-page-demo', cuid: 'cikqgkv4q01lk2057ualdn3le', content: thankYouContent });
    const unsubPage = new Page({ title: 'UnSub Page Demo', type: 'unsub', slug: 'unsub-page-demo', cuid: 'owpfhyv4q01ck0275ualdn3sj', content: unsubContent });


    Page.create([optinPage, salesPage, thankYouPage, unsubPage], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}
