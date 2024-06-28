const fs = require("fs");

const generateUsers = () => {
  const users = [];

  const baseData = {
    organization: "Lendsqr",
    dateCreated: "May 1, 2020 10:00 AM",
    status: ["Inactive", "Active"],
    maritalStatus: ["Single", "Married"],
    gender: ["Male", "Female"],
    sector: "FinTech",
    duration: "2 years",
    income: "₦200,000.00- ₦400,000.00",
    loan_repayment: [4000, 8000, 12000],
  };

  for (let i = 1; i <= 30; i++) {
    const user = {
      id: i,
      personal_info: {
        organization: baseData.organization,
        username: `User${i}`,
        email: `user${i}@lendsqr.com`,
        phoneNumber: `0807890372${i < 10 ? "0" : ""}${i}`,
        dateCreated: `May ${i}, 2020 10:00 AM`,
        status: baseData.status[i % 2],
        maritalStatus: baseData.maritalStatus[i % 2],
        gender: baseData.gender[i % 2],
        bvn: `07473524278${i < 10 ? "0" : ""}${i}`,
        children: `${i % 4}`, // Cycle through 0 to 3 children
      },
      socialMedial: {
        twitter_username: `@user${i}`,
        facebook_username: `User${i}`,
        instagram_username: `user${i}`,
      },
      gurrantor: {
        full_name: `Gurrantor${i}`,
        email: `gurrantor${i}@lendsqr.com`,
        phoneNumber: `0807890372${i < 10 ? "0" : ""}${i}`,
        relationships: i % 2 === 0 ? "brother" : "sister",
      },
      educations: {
        level: i % 2 === 0 ? "B.sc" : "M.sc",
        employment_status: "Employed",
        sector: baseData.sector,
        duration: baseData.duration,
        official_email: `user${i}@lendsqr.com`,
        income: baseData.income,
        loan_repayment: baseData.loan_repayment[i % 3],
      },
    };

    users.push(user);
  }

  return { user: users };
};

const data = generateUsers();
fs.writeFileSync("db.json", JSON.stringify(data, null, 2));

{
   "user": [
    {
      "id": 1,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Debby",
        "email": "debby@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Active",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
         "rfq_code": "rdsgep263732",
        "rating": 5,
        "accountNumber": "25362892522",
        "amount": 6000000000,
        "bank": "Gtb",
      },
      "socialMedial": {
        "twitter_username": "@debbie",
        "facebook_username": "debby",
        "instagram_username": "debby"
      },
      "gurrantor": {
        "full_name": "Debby Lawson",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 2,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Adedeji Olalekan",
        "email": "user2@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2",
         "rfq_code": "P746ep263732",
        "rating": 5,
        "accountNumber": "0474892522",
        "amount": 90000000,
        "bank": "UBA",
      },
      "socialMedial": {
        "twitter_username": "@user2",
        "facebook_username": "User2",
        "instagram_username": "user2"
      },
      "gurrantor": {
        "full_name": "Adedeji Olalekan",
        "email": "gurrantor2@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user2@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 3,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Philipp Per",
        "email": "phil@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3",
         "rfq_code": "09353ep263732",
        "rating": 3,
        "accountNumber": "8476492522",
        "amount": 250000000,
        "bank": "ECO Bank",
      },
      "socialMedial": {
        "twitter_username": "@Philipp Per",
        "facebook_username": "Philipp Per",
        "instagram_username": "Philipp Per"
      },
      "gurrantor": {
        "full_name": "Philipp Per",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 4,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Adenike Kenneth",
        "email": "adenike@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Pending",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1",
         "rfq_code": "3452io263732",
        "rating": 4,
        "accountNumber": "8489692522",
        "amount": 250000000,
        "bank": "Prvidous Bank",
      },
      "socialMedial": {
        "twitter_username": "@Adenike Kenneth",
        "facebook_username": "Adenike Kenneth",
        "instagram_username": "Adenike Kenneth"
      },
      "gurrantor": {
        "full_name": "Adenike Kenneth",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 5,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Loveth Kelvin",
        "email": "lovethlvin@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2",
         "rfq_code": "3452io263732",
        "rating": 4,
        "accountNumber": "8489692522",
        "amount": 250000000,
        "bank": "Prvidous Bank",
      },
      "socialMedial": {
        "twitter_username": "@Loveth Kelvin",
        "facebook_username": "Loveth Kelvin",
        "instagram_username": "Loveth Kelvin"
      },
      "gurrantor": {
        "full_name": "Loveth Kelvin",
        "email": "gurrantor2@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user2@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 6,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Jesuferanmi Lengend",
        "email": "Jesuferanmi Lengend@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3",
        "rfq_code": "09353ep263732",
        "rating": 3,
        "accountNumber": "8476492522",
        "amount": 250000000,
        "bank": "ECO Bank",
      },
      "socialMedial": {
        "twitter_username": "@Jesuferanmi Lengend",
        "facebook_username": "Jesuferanmi Lengend",
        "instagram_username": "Jesuferanmi Lengend"
      },
      "gurrantor": {
        "full_name": "Jesuferanmi Lengend",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 7,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Edin Dzeko",
        "email": "dinzeko@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Pending",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1",
        "rfq_code": "P746ep263732",
        "rating": 5,
        "accountNumber": "0474892522",
        "amount": 90000000,
        "bank": "UBA",
      },
      "socialMedial": {
        "twitter_username": "@edin",
        "facebook_username": "Edin Dzeko",
        "instagram_username": "Edin Dzeko"
      },
      "gurrantor": {
        "full_name": "Edin Dzeko",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 8,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Gideon Sam",
        "email": "sam@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Pending",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2",
         "rfq_code": "09353ep263732",
        "rating": 3,
        "accountNumber": "8476492522",
        "amount": 250000000,
        "bank": "ECO Bank",
      },
      "socialMedial": {
        "twitter_username": "@Sam_gideon",
        "facebook_username": "Gideon Sam",
        "instagram_username": "Edin Dzeko"
      },
      "gurrantor": {
        "full_name": "Edin Dzeko",
        "email": "gurrantor@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "edindzeko@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 9,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Itunu Oladejo",
        "email": "itunuoladejo@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Active",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3",
         "rfq_code": "09353ep263732",
        "rating": 3,
        "accountNumber": "8476492522",
        "amount": 250000000,
        "bank": "ECO Bank",
      },
      "socialMedial": {
        "twitter_username": "@ola_itunu",
        "facebook_username": "Itunu Oladejo",
        "instagram_username": "Itunu Oladejo"
      },
      "gurrantor": {
        "full_name": "Itunu Oladejo",
        "email": "ola@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 10,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Modupe Oluwa",
        "email": "modupeoluwa@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1",
         "rfq_code": "09353ep263732",
        "rating": 3,
        "accountNumber": "8476492522",
        "amount": 250000000,
        "bank": "ECO Bank",
      },
      "socialMedial": {
        "twitter_username": "@Modupe Oluwa",
        "facebook_username": "Modupe Oluwa",
        "instagram_username": "Modupe Oluwa"
      },
      "gurrantor": {
        "full_name": "Modupe Oluwa",
        "email": "modupe@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 11,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "king",
        "email": "king@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3",
         "rfq_code": "09353ep263732",
        "rating": 3,
        "accountNumber": "8476492522",
        "amount": 250000000,
        "bank": "ECO Bank",
      },
      "socialMedial": {
        "twitter_username": "@king",
        "facebook_username": "king",
        "instagram_username": "king"
      },
      "gurrantor": {
        "full_name": "King God'swill",
        "email": "king@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 12,
      "personal_info": {
        "organization": "Hassan",
        "username": "User1",
        "email": "user1@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1",
         "rfq_code": "P746ep263732",
        "rating": 5,
        "accountNumber": "0474892522",
        "amount": 90000000,
        "bank": "UBA",
      },
      "socialMedial": {
        "twitter_username": "@user1",
        "facebook_username": "Bode Akinbade",
        "instagram_username": "user1"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 13,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Debby",
        "email": "user2@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Active",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2",
         "rfq_code": "P746ep263732",
        "rating": 5,
        "accountNumber": "0474892522",
        "amount": 90000000,
        "bank": "UBA",
      },
      "socialMedial": {
        "twitter_username": "@user2",
        "facebook_username": "User2",
        "instagram_username": "user2"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor2@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user2@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 14,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Bode Akinbade",
        "email": "user3@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3",
         "rfq_code": "P746ep263732",
        "rating": 5,
        "accountNumber": "0474892522",
        "amount": 90000000,
        "bank": "UBA",
      },
      "socialMedial": {
        "twitter_username": "@user3",
        "facebook_username": "User3",
        "instagram_username": "user3"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 15,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Bode Akinbade",
        "email": "user3@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3",
         "rfq_code": "P746ep263732",
        "rating": 5,
        "accountNumber": "0474892522",
        "amount": 90000000,
        "bank": "UBA",
      },
      "socialMedial": {
        "twitter_username": "@user3",
        "facebook_username": "User3",
        "instagram_username": "user3"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 16,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Debby",
        "email": "debby@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Active",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1",
         "rfq_code": "P746ep263732",
        "rating": 5,
        "accountNumber": "0474892522",
        "amount": 90000000,
        "bank": "UBA",
      },
      "socialMedial": {
        "twitter_username": "@debbie",
        "facebook_username": "debby",
        "instagram_username": "debby"
      },
      "gurrantor": {
        "full_name": "Debby Lawson",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 17,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Adedeji Olalekan",
        "email": "user2@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2",
         "rfq_code": "P746ep263732",
        "rating": 5,
        "accountNumber": "0474892522",
        "amount": 90000000,
        "bank": "UBA",
      },
      "socialMedial": {
        "twitter_username": "@user2",
        "facebook_username": "User2",
        "instagram_username": "user2"
      },
      "gurrantor": {
        "full_name": "Adedeji Olalekan",
        "email": "gurrantor2@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user2@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 18,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Philipp Per",
        "email": "phil@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3",
         "rfq_code": "P746ep263732",
        "rating": 5,
        "accountNumber": "0474892522",
        "amount": 90000000,
        "bank": "UBA",
      },
      "socialMedial": {
        "twitter_username": "@Philipp Per",
        "facebook_username": "Philipp Per",
        "instagram_username": "Philipp Per"
      },
      "gurrantor": {
        "full_name": "Philipp Per",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 19,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Adenike Kenneth",
        "email": "adenike@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Pending",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1",
         "rfq_code": "P746ep263732",
        "rating": 5,
        "accountNumber": "0474892522",
        "amount": 90000000,
        "bank": "UBA",
      },
      "socialMedial": {
        "twitter_username": "@Adenike Kenneth",
        "facebook_username": "Adenike Kenneth",
        "instagram_username": "Adenike Kenneth"
      },
      "gurrantor": {
        "full_name": "Adenike Kenneth",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 20,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Loveth Kelvin",
        "email": "lovethlvin@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2",
         "rfq_code": "P746ep263732",
        "rating": 5,
        "accountNumber": "0474892522",
        "amount": 90000000,
        "bank": "UBA",
      },
      "socialMedial": {
        "twitter_username": "@Loveth Kelvin",
        "facebook_username": "Loveth Kelvin",
        "instagram_username": "Loveth Kelvin"
      },
      "gurrantor": {
        "full_name": "Loveth Kelvin",
        "email": "gurrantor2@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user2@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 21,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Jesuferanmi Lengend",
        "email": "Jesuferanmi Lengend@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3",
         "rfq_code": "0093p263732",
        "rating": 4,
        "accountNumber": "0474892522",
        "amount": 90000000,
        "bank": "Access",
      },
      "socialMedial": {
        "twitter_username": "@Jesuferanmi Lengend",
        "facebook_username": "Jesuferanmi Lengend",
        "instagram_username": "Jesuferanmi Lengend"
      },
      "gurrantor": {
        "full_name": "Jesuferanmi Lengend",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 22,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Edin Dzeko",
        "email": "dinzeko@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Pending",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1",
        "rfq_code": "0093p263732",
        "rating": 4,
        "accountNumber": "0474892522",
        "amount": 90000000,
        "bank": "Access",
      },
      "socialMedial": {
        "twitter_username": "@edin",
        "facebook_username": "Edin Dzeko",
        "instagram_username": "Edin Dzeko"
      },
      "gurrantor": {
        "full_name": "Edin Dzeko",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 23,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Gideon Sam",
        "email": "sam@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Pending",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2",
        "rfq_code": "93738263732",
        "rating": 3,
        "accountNumber": "0474892522",
        "amount": 10000000,
        "bank": "First Bank",
      },
      "socialMedial": {
        "twitter_username": "@Sam_gideon",
        "facebook_username": "Gideon Sam",
        "instagram_username": "Edin Dzeko"
      },
      "gurrantor": {
        "full_name": "Edin Dzeko",
        "email": "gurrantor@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "edindzeko@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 24,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Itunu Oladejo",
        "email": "itunuoladejo@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Active",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3",
         "rfq_code": "93738263732",
        "rating": 3,
        "accountNumber": "0474892522",
        "amount": 10000000,
        "bank": "First Bank",
      },
      "socialMedial": {
        "twitter_username": "@ola_itunu",
        "facebook_username": "Itunu Oladejo",
        "instagram_username": "Itunu Oladejo"
      },
      "gurrantor": {
        "full_name": "Itunu Oladejo",
        "email": "ola@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 25,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Modupe Oluwa",
        "email": "modupeoluwa@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1",
         "rfq_code": "93738263732",
        "rating": 3,
        "accountNumber": "0474892522",
        "amount": 10000000,
        "bank": "First Bank",
      },
      "socialMedial": {
        "twitter_username": "@Modupe Oluwa",
        "facebook_username": "Modupe Oluwa",
        "instagram_username": "Modupe Oluwa"
      },
      "gurrantor": {
        "full_name": "Modupe Oluwa",
        "email": "modupe@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 26,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "king",
        "email": "king@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3",
         "rfq_code": "93738263732",
        "rating": 3,
        "accountNumber": "0474892522",
        "amount": 10000000,
        "bank": "First Bank",
      },
      "socialMedial": {
        "twitter_username": "@king",
        "facebook_username": "king",
        "instagram_username": "king"
      },
      "gurrantor": {
        "full_name": "King God'swill",
        "email": "king@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 27,
      "personal_info": {
        "organization": "Hassan",
        "username": "User1",
        "email": "user1@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1",
         "rfq_code": "93738263732",
        "rating": 3,
        "accountNumber": "0474892522",
        "amount": 10000000,
        "bank": "First Bank",
      },
      "socialMedial": {
        "twitter_username": "@user1",
        "facebook_username": "Bode Akinbade",
        "instagram_username": "user1"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 28,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Debby",
        "email": "user2@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Active",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2"
      },
      "socialMedial": {
        "twitter_username": "@user2",
        "facebook_username": "User2",
        "instagram_username": "user2"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor2@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user2@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 29,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Bode Akinbade",
        "email": "user3@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@user3",
        "facebook_username": "User3",
        "instagram_username": "user3"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 30,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Bode Akinbade",
        "email": "user3@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@user3",
        "facebook_username": "User3",
        "instagram_username": "user3"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 31,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Debby",
        "email": "debby@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Active",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@debbie",
        "facebook_username": "debby",
        "instagram_username": "debby"
      },
      "gurrantor": {
        "full_name": "Debby Lawson",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 32,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Adedeji Olalekan",
        "email": "user2@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2"
      },
      "socialMedial": {
        "twitter_username": "@user2",
        "facebook_username": "User2",
        "instagram_username": "user2"
      },
      "gurrantor": {
        "full_name": "Adedeji Olalekan",
        "email": "gurrantor2@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user2@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 33,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Philipp Per",
        "email": "phil@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@Philipp Per",
        "facebook_username": "Philipp Per",
        "instagram_username": "Philipp Per"
      },
      "gurrantor": {
        "full_name": "Philipp Per",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 34,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Adenike Kenneth",
        "email": "adenike@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Pending",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@Adenike Kenneth",
        "facebook_username": "Adenike Kenneth",
        "instagram_username": "Adenike Kenneth"
      },
      "gurrantor": {
        "full_name": "Adenike Kenneth",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 35,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Loveth Kelvin",
        "email": "lovethlvin@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2"
      },
      "socialMedial": {
        "twitter_username": "@Loveth Kelvin",
        "facebook_username": "Loveth Kelvin",
        "instagram_username": "Loveth Kelvin"
      },
      "gurrantor": {
        "full_name": "Loveth Kelvin",
        "email": "gurrantor2@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user2@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id":36,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Jesuferanmi Lengend",
        "email": "Jesuferanmi Lengend@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@Jesuferanmi Lengend",
        "facebook_username": "Jesuferanmi Lengend",
        "instagram_username": "Jesuferanmi Lengend"
      },
      "gurrantor": {
        "full_name": "Jesuferanmi Lengend",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 37,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Edin Dzeko",
        "email": "dinzeko@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Pending",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@edin",
        "facebook_username": "Edin Dzeko",
        "instagram_username": "Edin Dzeko"
      },
      "gurrantor": {
        "full_name": "Edin Dzeko",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 38,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Gideon Sam",
        "email": "sam@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Pending",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2"
      },
      "socialMedial": {
        "twitter_username": "@Sam_gideon",
        "facebook_username": "Gideon Sam",
        "instagram_username": "Edin Dzeko"
      },
      "gurrantor": {
        "full_name": "Edin Dzeko",
        "email": "gurrantor@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "edindzeko@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 39,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Itunu Oladejo",
        "email": "itunuoladejo@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Active",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@ola_itunu",
        "facebook_username": "Itunu Oladejo",
        "instagram_username": "Itunu Oladejo"
      },
      "gurrantor": {
        "full_name": "Itunu Oladejo",
        "email": "ola@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 40,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Modupe Oluwa",
        "email": "modupeoluwa@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@Modupe Oluwa",
        "facebook_username": "Modupe Oluwa",
        "instagram_username": "Modupe Oluwa"
      },
      "gurrantor": {
        "full_name": "Modupe Oluwa",
        "email": "modupe@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 41,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "king",
        "email": "king@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@king",
        "facebook_username": "king",
        "instagram_username": "king"
      },
      "gurrantor": {
        "full_name": "King God'swill",
        "email": "king@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 42,
      "personal_info": {
        "organization": "Hassan",
        "username": "User1",
        "email": "user1@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@user1",
        "facebook_username": "Bode Akinbade",
        "instagram_username": "user1"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 43,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Debby",
        "email": "user2@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Active",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2"
      },
      "socialMedial": {
        "twitter_username": "@user2",
        "facebook_username": "User2",
        "instagram_username": "user2"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor2@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user2@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 44,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Bode Akinbade",
        "email": "user3@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@user3",
        "facebook_username": "User3",
        "instagram_username": "user3"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 45,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Bode Akinbade",
        "email": "user3@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@user3",
        "facebook_username": "User3",
        "instagram_username": "user3"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 46,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Debby",
        "email": "debby@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Active",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@debbie",
        "facebook_username": "debby",
        "instagram_username": "debby"
      },
      "gurrantor": {
        "full_name": "Debby Lawson",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 47,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Adedeji Olalekan",
        "email": "user2@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2"
      },
      "socialMedial": {
        "twitter_username": "@user2",
        "facebook_username": "User2",
        "instagram_username": "user2"
      },
      "gurrantor": {
        "full_name": "Adedeji Olalekan",
        "email": "gurrantor2@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user2@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 48,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Philipp Per",
        "email": "phil@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@Philipp Per",
        "facebook_username": "Philipp Per",
        "instagram_username": "Philipp Per"
      },
      "gurrantor": {
        "full_name": "Philipp Per",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 49,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Adenike Kenneth",
        "email": "adenike@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Pending",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@Adenike Kenneth",
        "facebook_username": "Adenike Kenneth",
        "instagram_username": "Adenike Kenneth"
      },
      "gurrantor": {
        "full_name": "Adenike Kenneth",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 50,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Loveth Kelvin",
        "email": "lovethlvin@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2"
      },
      "socialMedial": {
        "twitter_username": "@Loveth Kelvin",
        "facebook_username": "Loveth Kelvin",
        "instagram_username": "Loveth Kelvin"
      },
      "gurrantor": {
        "full_name": "Loveth Kelvin",
        "email": "gurrantor2@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user2@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 51,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Jesuferanmi Lengend",
        "email": "Jesuferanmi Lengend@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@Jesuferanmi Lengend",
        "facebook_username": "Jesuferanmi Lengend",
        "instagram_username": "Jesuferanmi Lengend"
      },
      "gurrantor": {
        "full_name": "Jesuferanmi Lengend",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 52,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Edin Dzeko",
        "email": "dinzeko@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Pending",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@edin",
        "facebook_username": "Edin Dzeko",
        "instagram_username": "Edin Dzeko"
      },
      "gurrantor": {
        "full_name": "Edin Dzeko",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 53,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Gideon Sam",
        "email": "sam@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Pending",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2"
      },
      "socialMedial": {
        "twitter_username": "@Sam_gideon",
        "facebook_username": "Gideon Sam",
        "instagram_username": "Edin Dzeko"
      },
      "gurrantor": {
        "full_name": "Edin Dzeko",
        "email": "gurrantor@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "edindzeko@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 54,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Itunu Oladejo",
        "email": "itunuoladejo@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Active",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@ola_itunu",
        "facebook_username": "Itunu Oladejo",
        "instagram_username": "Itunu Oladejo"
      },
      "gurrantor": {
        "full_name": "Itunu Oladejo",
        "email": "ola@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 55,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Modupe Oluwa",
        "email": "modupeoluwa@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@Modupe Oluwa",
        "facebook_username": "Modupe Oluwa",
        "instagram_username": "Modupe Oluwa"
      },
      "gurrantor": {
        "full_name": "Modupe Oluwa",
        "email": "modupe@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 56,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "king",
        "email": "king@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@king",
        "facebook_username": "king",
        "instagram_username": "king"
      },
      "gurrantor": {
        "full_name": "King God'swill",
        "email": "king@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 57,
      "personal_info": {
        "organization": "Hassan",
        "username": "User1",
        "email": "user1@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@user1",
        "facebook_username": "Bode Akinbade",
        "instagram_username": "user1"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 58,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Debby",
        "email": "user2@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Active",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2"
      },
      "socialMedial": {
        "twitter_username": "@user2",
        "facebook_username": "User2",
        "instagram_username": "user2"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor2@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user2@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 59,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Bode Akinbade",
        "email": "user3@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@user3",
        "facebook_username": "User3",
        "instagram_username": "user3"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 60,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Bode Akinbade",
        "email": "user3@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@user3",
        "facebook_username": "User3",
        "instagram_username": "user3"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 61,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Debby",
        "email": "debby@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Active",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@debbie",
        "facebook_username": "debby",
        "instagram_username": "debby"
      },
      "gurrantor": {
        "full_name": "Debby Lawson",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 62,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Adedeji Olalekan",
        "email": "user2@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2"
      },
      "socialMedial": {
        "twitter_username": "@user2",
        "facebook_username": "User2",
        "instagram_username": "user2"
      },
      "gurrantor": {
        "full_name": "Adedeji Olalekan",
        "email": "gurrantor2@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user2@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 63,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Philipp Per",
        "email": "phil@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@Philipp Per",
        "facebook_username": "Philipp Per",
        "instagram_username": "Philipp Per"
      },
      "gurrantor": {
        "full_name": "Philipp Per",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
     {
      "id": 64,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Adenike Kenneth",
        "email": "adenike@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Pending",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@Adenike Kenneth",
        "facebook_username": "Adenike Kenneth",
        "instagram_username": "Adenike Kenneth"
      },
      "gurrantor": {
        "full_name": "Adenike Kenneth",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 65,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Loveth Kelvin",
        "email": "lovethlvin@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2"
      },
      "socialMedial": {
        "twitter_username": "@Loveth Kelvin",
        "facebook_username": "Loveth Kelvin",
        "instagram_username": "Loveth Kelvin"
      },
      "gurrantor": {
        "full_name": "Loveth Kelvin",
        "email": "gurrantor2@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user2@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 66,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Jesuferanmi Lengend",
        "email": "Jesuferanmi Lengend@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@Jesuferanmi Lengend",
        "facebook_username": "Jesuferanmi Lengend",
        "instagram_username": "Jesuferanmi Lengend"
      },
      "gurrantor": {
        "full_name": "Jesuferanmi Lengend",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 67,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Edin Dzeko",
        "email": "dinzeko@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Pending",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@edin",
        "facebook_username": "Edin Dzeko",
        "instagram_username": "Edin Dzeko"
      },
      "gurrantor": {
        "full_name": "Edin Dzeko",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 68,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Gideon Sam",
        "email": "sam@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Pending",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2"
      },
      "socialMedial": {
        "twitter_username": "@Sam_gideon",
        "facebook_username": "Gideon Sam",
        "instagram_username": "Edin Dzeko"
      },
      "gurrantor": {
        "full_name": "Edin Dzeko",
        "email": "gurrantor@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "edindzeko@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 69,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Itunu Oladejo",
        "email": "itunuoladejo@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Active",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@ola_itunu",
        "facebook_username": "Itunu Oladejo",
        "instagram_username": "Itunu Oladejo"
      },
      "gurrantor": {
        "full_name": "Itunu Oladejo",
        "email": "ola@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 70,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Modupe Oluwa",
        "email": "modupeoluwa@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@Modupe Oluwa",
        "facebook_username": "Modupe Oluwa",
        "instagram_username": "Modupe Oluwa"
      },
      "gurrantor": {
        "full_name": "Modupe Oluwa",
        "email": "modupe@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 71,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "king",
        "email": "king@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@king",
        "facebook_username": "king",
        "instagram_username": "king"
      },
      "gurrantor": {
        "full_name": "King God'swill",
        "email": "king@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 72,
      "personal_info": {
        "organization": "Hassan",
        "username": "User1",
        "email": "user1@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@user1",
        "facebook_username": "Bode Akinbade",
        "instagram_username": "user1"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 73,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Debby",
        "email": "user2@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Active",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2"
      },
      "socialMedial": {
        "twitter_username": "@user2",
        "facebook_username": "User2",
        "instagram_username": "user2"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor2@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user2@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 74,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Bode Akinbade",
        "email": "user3@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@user3",
        "facebook_username": "User3",
        "instagram_username": "user3"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 75,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Bode Akinbade",
        "email": "user3@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@user3",
        "facebook_username": "User3",
        "instagram_username": "user3"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 76,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Debby",
        "email": "debby@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Active",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@debbie",
        "facebook_username": "debby",
        "instagram_username": "debby"
      },
      "gurrantor": {
        "full_name": "Debby Lawson",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 77,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Adedeji Olalekan",
        "email": "user2@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2"
      },
      "socialMedial": {
        "twitter_username": "@user2",
        "facebook_username": "User2",
        "instagram_username": "user2"
      },
      "gurrantor": {
        "full_name": "Adedeji Olalekan",
        "email": "gurrantor2@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user2@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 78,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Philipp Per",
        "email": "phil@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@Philipp Per",
        "facebook_username": "Philipp Per",
        "instagram_username": "Philipp Per"
      },
      "gurrantor": {
        "full_name": "Philipp Per",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 79,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Adenike Kenneth",
        "email": "adenike@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Pending",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@Adenike Kenneth",
        "facebook_username": "Adenike Kenneth",
        "instagram_username": "Adenike Kenneth"
      },
      "gurrantor": {
        "full_name": "Adenike Kenneth",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 80,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Loveth Kelvin",
        "email": "lovethlvin@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2"
      },
      "socialMedial": {
        "twitter_username": "@Loveth Kelvin",
        "facebook_username": "Loveth Kelvin",
        "instagram_username": "Loveth Kelvin"
      },
      "gurrantor": {
        "full_name": "Loveth Kelvin",
        "email": "gurrantor2@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user2@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 81,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Jesuferanmi Lengend",
        "email": "Jesuferanmi Lengend@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@Jesuferanmi Lengend",
        "facebook_username": "Jesuferanmi Lengend",
        "instagram_username": "Jesuferanmi Lengend"
      },
      "gurrantor": {
        "full_name": "Jesuferanmi Lengend",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 82,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Edin Dzeko",
        "email": "dinzeko@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Pending",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@edin",
        "facebook_username": "Edin Dzeko",
        "instagram_username": "Edin Dzeko"
      },
      "gurrantor": {
        "full_name": "Edin Dzeko",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 83,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Gideon Sam",
        "email": "sam@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Pending",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2"
      },
      "socialMedial": {
        "twitter_username": "@Sam_gideon",
        "facebook_username": "Gideon Sam",
        "instagram_username": "Edin Dzeko"
      },
      "gurrantor": {
        "full_name": "Edin Dzeko",
        "email": "gurrantor@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "edindzeko@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 84,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Itunu Oladejo",
        "email": "itunuoladejo@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Active",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@ola_itunu",
        "facebook_username": "Itunu Oladejo",
        "instagram_username": "Itunu Oladejo"
      },
      "gurrantor": {
        "full_name": "Itunu Oladejo",
        "email": "ola@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 85,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Modupe Oluwa",
        "email": "modupeoluwa@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@Modupe Oluwa",
        "facebook_username": "Modupe Oluwa",
        "instagram_username": "Modupe Oluwa"
      },
      "gurrantor": {
        "full_name": "Modupe Oluwa",
        "email": "modupe@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 86,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "king",
        "email": "king@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@king",
        "facebook_username": "king",
        "instagram_username": "king"
      },
      "gurrantor": {
        "full_name": "King God'swill",
        "email": "king@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 87,
      "personal_info": {
        "organization": "Hassan",
        "username": "User1",
        "email": "user1@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@user1",
        "facebook_username": "Bode Akinbade",
        "instagram_username": "user1"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 88,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Debby",
        "email": "user2@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Active",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2"
      },
      "socialMedial": {
        "twitter_username": "@user2",
        "facebook_username": "User2",
        "instagram_username": "user2"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor2@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user2@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 89,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Bode Akinbade",
        "email": "user3@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@user3",
        "facebook_username": "User3",
        "instagram_username": "user3"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 90,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Bode Akinbade",
        "email": "user3@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@user3",
        "facebook_username": "User3",
        "instagram_username": "user3"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 91,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Debby",
        "email": "debby@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Active",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@debbie",
        "facebook_username": "debby",
        "instagram_username": "debby"
      },
      "gurrantor": {
        "full_name": "Debby Lawson",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 92,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Adedeji Olalekan",
        "email": "user2@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2"
      },
      "socialMedial": {
        "twitter_username": "@user2",
        "facebook_username": "User2",
        "instagram_username": "user2"
      },
      "gurrantor": {
        "full_name": "Adedeji Olalekan",
        "email": "gurrantor2@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user2@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 93,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Philipp Per",
        "email": "phil@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@Philipp Per",
        "facebook_username": "Philipp Per",
        "instagram_username": "Philipp Per"
      },
      "gurrantor": {
        "full_name": "Philipp Per",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 94,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Adenike Kenneth",
        "email": "adenike@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Pending",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@Adenike Kenneth",
        "facebook_username": "Adenike Kenneth",
        "instagram_username": "Adenike Kenneth"
      },
      "gurrantor": {
        "full_name": "Adenike Kenneth",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 95,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Loveth Kelvin",
        "email": "lovethlvin@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2"
      },
      "socialMedial": {
        "twitter_username": "@Loveth Kelvin",
        "facebook_username": "Loveth Kelvin",
        "instagram_username": "Loveth Kelvin"
      },
      "gurrantor": {
        "full_name": "Loveth Kelvin",
        "email": "gurrantor2@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user2@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 96,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Jesuferanmi Lengend",
        "email": "Jesuferanmi Lengend@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@Jesuferanmi Lengend",
        "facebook_username": "Jesuferanmi Lengend",
        "instagram_username": "Jesuferanmi Lengend"
      },
      "gurrantor": {
        "full_name": "Jesuferanmi Lengend",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 97,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Edin Dzeko",
        "email": "dinzeko@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Pending",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@edin",
        "facebook_username": "Edin Dzeko",
        "instagram_username": "Edin Dzeko"
      },
      "gurrantor": {
        "full_name": "Edin Dzeko",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 98,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Gideon Sam",
        "email": "sam@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Pending",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2"
      },
      "socialMedial": {
        "twitter_username": "@Sam_gideon",
        "facebook_username": "Gideon Sam",
        "instagram_username": "Edin Dzeko"
      },
      "gurrantor": {
        "full_name": "Edin Dzeko",
        "email": "gurrantor@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "edindzeko@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id":99,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Itunu Oladejo",
        "email": "itunuoladejo@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Active",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@ola_itunu",
        "facebook_username": "Itunu Oladejo",
        "instagram_username": "Itunu Oladejo"
      },
      "gurrantor": {
        "full_name": "Itunu Oladejo",
        "email": "ola@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 100,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Modupe Oluwa",
        "email": "modupeoluwa@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@Modupe Oluwa",
        "facebook_username": "Modupe Oluwa",
        "instagram_username": "Modupe Oluwa"
      },
      "gurrantor": {
        "full_name": "Modupe Oluwa",
        "email": "modupe@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 101,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "king",
        "email": "king@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@king",
        "facebook_username": "king",
        "instagram_username": "king"
      },
      "gurrantor": {
        "full_name": "King God'swill",
        "email": "king@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 102,
      "personal_info": {
        "organization": "Hassan",
        "username": "User1",
        "email": "user1@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@user1",
        "facebook_username": "Bode Akinbade",
        "instagram_username": "user1"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 103,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Debby",
        "email": "user2@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Active",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2"
      },
      "socialMedial": {
        "twitter_username": "@user2",
        "facebook_username": "User2",
        "instagram_username": "user2"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor2@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user2@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 104,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Bode Akinbade",
        "email": "user3@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@user3",
        "facebook_username": "User3",
        "instagram_username": "user3"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 105,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Bode Akinbade",
        "email": "user3@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@user3",
        "facebook_username": "User3",
        "instagram_username": "user3"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 106,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Debby",
        "email": "debby@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Active",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@debbie",
        "facebook_username": "debby",
        "instagram_username": "debby"
      },
      "gurrantor": {
        "full_name": "Debby Lawson",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 107,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Adedeji Olalekan",
        "email": "user2@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2"
      },
      "socialMedial": {
        "twitter_username": "@user2",
        "facebook_username": "User2",
        "instagram_username": "user2"
      },
      "gurrantor": {
        "full_name": "Adedeji Olalekan",
        "email": "gurrantor2@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user2@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 108,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Philipp Per",
        "email": "phil@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@Philipp Per",
        "facebook_username": "Philipp Per",
        "instagram_username": "Philipp Per"
      },
      "gurrantor": {
        "full_name": "Philipp Per",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 109,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Adenike Kenneth",
        "email": "adenike@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Pending",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@Adenike Kenneth",
        "facebook_username": "Adenike Kenneth",
        "instagram_username": "Adenike Kenneth"
      },
      "gurrantor": {
        "full_name": "Adenike Kenneth",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 110,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Loveth Kelvin",
        "email": "lovethlvin@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2"
      },
      "socialMedial": {
        "twitter_username": "@Loveth Kelvin",
        "facebook_username": "Loveth Kelvin",
        "instagram_username": "Loveth Kelvin"
      },
      "gurrantor": {
        "full_name": "Loveth Kelvin",
        "email": "gurrantor2@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user2@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 111,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Jesuferanmi Lengend",
        "email": "Jesuferanmi Lengend@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@Jesuferanmi Lengend",
        "facebook_username": "Jesuferanmi Lengend",
        "instagram_username": "Jesuferanmi Lengend"
      },
      "gurrantor": {
        "full_name": "Jesuferanmi Lengend",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 112,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Edin Dzeko",
        "email": "dinzeko@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Pending",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@edin",
        "facebook_username": "Edin Dzeko",
        "instagram_username": "Edin Dzeko"
      },
      "gurrantor": {
        "full_name": "Edin Dzeko",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 113,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Gideon Sam",
        "email": "sam@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Pending",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2"
      },
      "socialMedial": {
        "twitter_username": "@Sam_gideon",
        "facebook_username": "Gideon Sam",
        "instagram_username": "Edin Dzeko"
      },
      "gurrantor": {
        "full_name": "Edin Dzeko",
        "email": "gurrantor@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "edindzeko@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 114,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Itunu Oladejo",
        "email": "itunuoladejo@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Active",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@ola_itunu",
        "facebook_username": "Itunu Oladejo",
        "instagram_username": "Itunu Oladejo"
      },
      "gurrantor": {
        "full_name": "Itunu Oladejo",
        "email": "ola@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 115,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Modupe Oluwa",
        "email": "modupeoluwa@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@Modupe Oluwa",
        "facebook_username": "Modupe Oluwa",
        "instagram_username": "Modupe Oluwa"
      },
      "gurrantor": {
        "full_name": "Modupe Oluwa",
        "email": "modupe@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 116,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "king",
        "email": "king@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@king",
        "facebook_username": "king",
        "instagram_username": "king"
      },
      "gurrantor": {
        "full_name": "King God'swill",
        "email": "king@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 117,
      "personal_info": {
        "organization": "Hassan",
        "username": "User1",
        "email": "user1@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@user1",
        "facebook_username": "Bode Akinbade",
        "instagram_username": "user1"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 118,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Debby",
        "email": "user2@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Active",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2"
      },
      "socialMedial": {
        "twitter_username": "@user2",
        "facebook_username": "User2",
        "instagram_username": "user2"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor2@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user2@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 119,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Bode Akinbade",
        "email": "user3@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@user3",
        "facebook_username": "User3",
        "instagram_username": "user3"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 120,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Bode Akinbade",
        "email": "user3@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@user3",
        "facebook_username": "User3",
        "instagram_username": "user3"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 121,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Debby",
        "email": "debby@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Active",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@debbie",
        "facebook_username": "debby",
        "instagram_username": "debby"
      },
      "gurrantor": {
        "full_name": "Debby Lawson",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 122,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Adedeji Olalekan",
        "email": "user2@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2"
      },
      "socialMedial": {
        "twitter_username": "@user2",
        "facebook_username": "User2",
        "instagram_username": "user2"
      },
      "gurrantor": {
        "full_name": "Adedeji Olalekan",
        "email": "gurrantor2@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user2@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 123,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Philipp Per",
        "email": "phil@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@Philipp Per",
        "facebook_username": "Philipp Per",
        "instagram_username": "Philipp Per"
      },
      "gurrantor": {
        "full_name": "Philipp Per",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 124,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Adenike Kenneth",
        "email": "adenike@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Pending",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@Adenike Kenneth",
        "facebook_username": "Adenike Kenneth",
        "instagram_username": "Adenike Kenneth"
      },
      "gurrantor": {
        "full_name": "Adenike Kenneth",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 125,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Loveth Kelvin",
        "email": "lovethlvin@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2"
      },
      "socialMedial": {
        "twitter_username": "@Loveth Kelvin",
        "facebook_username": "Loveth Kelvin",
        "instagram_username": "Loveth Kelvin"
      },
      "gurrantor": {
        "full_name": "Loveth Kelvin",
        "email": "gurrantor2@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user2@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 126,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Jesuferanmi Lengend",
        "email": "Jesuferanmi Lengend@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@Jesuferanmi Lengend",
        "facebook_username": "Jesuferanmi Lengend",
        "instagram_username": "Jesuferanmi Lengend"
      },
      "gurrantor": {
        "full_name": "Jesuferanmi Lengend",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 127,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Edin Dzeko",
        "email": "dinzeko@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Pending",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@edin",
        "facebook_username": "Edin Dzeko",
        "instagram_username": "Edin Dzeko"
      },
      "gurrantor": {
        "full_name": "Edin Dzeko",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 128,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Gideon Sam",
        "email": "sam@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Pending",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2"
      },
      "socialMedial": {
        "twitter_username": "@Sam_gideon",
        "facebook_username": "Gideon Sam",
        "instagram_username": "Edin Dzeko"
      },
      "gurrantor": {
        "full_name": "Edin Dzeko",
        "email": "gurrantor@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "edindzeko@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 129,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Itunu Oladejo",
        "email": "itunuoladejo@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Active",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@ola_itunu",
        "facebook_username": "Itunu Oladejo",
        "instagram_username": "Itunu Oladejo"
      },
      "gurrantor": {
        "full_name": "Itunu Oladejo",
        "email": "ola@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 130,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Modupe Oluwa",
        "email": "modupeoluwa@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@Modupe Oluwa",
        "facebook_username": "Modupe Oluwa",
        "instagram_username": "Modupe Oluwa"
      },
      "gurrantor": {
        "full_name": "Modupe Oluwa",
        "email": "modupe@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 131,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "king",
        "email": "king@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@king",
        "facebook_username": "king",
        "instagram_username": "king"
      },
      "gurrantor": {
        "full_name": "King God'swill",
        "email": "king@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 132,
      "personal_info": {
        "organization": "Hassan",
        "username": "User1",
        "email": "user1@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@user1",
        "facebook_username": "Bode Akinbade",
        "instagram_username": "user1"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 133,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Debby",
        "email": "user2@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Active",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2"
      },
      "socialMedial": {
        "twitter_username": "@user2",
        "facebook_username": "User2",
        "instagram_username": "user2"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor2@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user2@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 134,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Bode Akinbade",
        "email": "user3@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@user3",
        "facebook_username": "User3",
        "instagram_username": "user3"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 135,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Bode Akinbade",
        "email": "user3@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@user3",
        "facebook_username": "User3",
        "instagram_username": "user3"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 136,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Debby",
        "email": "debby@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Active",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@debbie",
        "facebook_username": "debby",
        "instagram_username": "debby"
      },
      "gurrantor": {
        "full_name": "Debby Lawson",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 137,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Adedeji Olalekan",
        "email": "user2@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2"
      },
      "socialMedial": {
        "twitter_username": "@user2",
        "facebook_username": "User2",
        "instagram_username": "user2"
      },
      "gurrantor": {
        "full_name": "Adedeji Olalekan",
        "email": "gurrantor2@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user2@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 138,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Philipp Per",
        "email": "phil@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@Philipp Per",
        "facebook_username": "Philipp Per",
        "instagram_username": "Philipp Per"
      },
      "gurrantor": {
        "full_name": "Philipp Per",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 139,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Adenike Kenneth",
        "email": "adenike@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Pending",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@Adenike Kenneth",
        "facebook_username": "Adenike Kenneth",
        "instagram_username": "Adenike Kenneth"
      },
      "gurrantor": {
        "full_name": "Adenike Kenneth",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 140,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Loveth Kelvin",
        "email": "lovethlvin@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2"
      },
      "socialMedial": {
        "twitter_username": "@Loveth Kelvin",
        "facebook_username": "Loveth Kelvin",
        "instagram_username": "Loveth Kelvin"
      },
      "gurrantor": {
        "full_name": "Loveth Kelvin",
        "email": "gurrantor2@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user2@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 141,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Jesuferanmi Lengend",
        "email": "Jesuferanmi Lengend@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@Jesuferanmi Lengend",
        "facebook_username": "Jesuferanmi Lengend",
        "instagram_username": "Jesuferanmi Lengend"
      },
      "gurrantor": {
        "full_name": "Jesuferanmi Lengend",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 142,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Edin Dzeko",
        "email": "dinzeko@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Pending",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@edin",
        "facebook_username": "Edin Dzeko",
        "instagram_username": "Edin Dzeko"
      },
      "gurrantor": {
        "full_name": "Edin Dzeko",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 143,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Gideon Sam",
        "email": "sam@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Pending",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2"
      },
      "socialMedial": {
        "twitter_username": "@Sam_gideon",
        "facebook_username": "Gideon Sam",
        "instagram_username": "Edin Dzeko"
      },
      "gurrantor": {
        "full_name": "Edin Dzeko",
        "email": "gurrantor@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "edindzeko@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 144,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Itunu Oladejo",
        "email": "itunuoladejo@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Active",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@ola_itunu",
        "facebook_username": "Itunu Oladejo",
        "instagram_username": "Itunu Oladejo"
      },
      "gurrantor": {
        "full_name": "Itunu Oladejo",
        "email": "ola@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 145,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Modupe Oluwa",
        "email": "modupeoluwa@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@Modupe Oluwa",
        "facebook_username": "Modupe Oluwa",
        "instagram_username": "Modupe Oluwa"
      },
      "gurrantor": {
        "full_name": "Modupe Oluwa",
        "email": "modupe@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 146,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "king",
        "email": "king@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@king",
        "facebook_username": "king",
        "instagram_username": "king"
      },
      "gurrantor": {
        "full_name": "King God'swill",
        "email": "king@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 146,
      "personal_info": {
        "organization": "Hassan",
        "username": "User1",
        "email": "user1@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@user1",
        "facebook_username": "Bode Akinbade",
        "instagram_username": "user1"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 147,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Debby",
        "email": "user2@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Active",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2"
      },
      "socialMedial": {
        "twitter_username": "@user2",
        "facebook_username": "User2",
        "instagram_username": "user2"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor2@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user2@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 148,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Bode Akinbade",
        "email": "user3@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@user3",
        "facebook_username": "User3",
        "instagram_username": "user3"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 149,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Bode Akinbade",
        "email": "user3@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@user3",
        "facebook_username": "User3",
        "instagram_username": "user3"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 150,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Debby",
        "email": "debby@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Active",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@debbie",
        "facebook_username": "debby",
        "instagram_username": "debby"
      },
      "gurrantor": {
        "full_name": "Debby Lawson",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 151,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Adedeji Olalekan",
        "email": "user2@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2"
      },
      "socialMedial": {
        "twitter_username": "@user2",
        "facebook_username": "User2",
        "instagram_username": "user2"
      },
      "gurrantor": {
        "full_name": "Adedeji Olalekan",
        "email": "gurrantor2@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user2@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 152,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Philipp Per",
        "email": "phil@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@Philipp Per",
        "facebook_username": "Philipp Per",
        "instagram_username": "Philipp Per"
      },
      "gurrantor": {
        "full_name": "Philipp Per",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 153,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Adenike Kenneth",
        "email": "adenike@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Pending",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@Adenike Kenneth",
        "facebook_username": "Adenike Kenneth",
        "instagram_username": "Adenike Kenneth"
      },
      "gurrantor": {
        "full_name": "Adenike Kenneth",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 154,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Loveth Kelvin",
        "email": "lovethlvin@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2"
      },
      "socialMedial": {
        "twitter_username": "@Loveth Kelvin",
        "facebook_username": "Loveth Kelvin",
        "instagram_username": "Loveth Kelvin"
      },
      "gurrantor": {
        "full_name": "Loveth Kelvin",
        "email": "gurrantor2@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user2@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 155,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Jesuferanmi Lengend",
        "email": "Jesuferanmi Lengend@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@Jesuferanmi Lengend",
        "facebook_username": "Jesuferanmi Lengend",
        "instagram_username": "Jesuferanmi Lengend"
      },
      "gurrantor": {
        "full_name": "Jesuferanmi Lengend",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 156,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Edin Dzeko",
        "email": "dinzeko@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Pending",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@edin",
        "facebook_username": "Edin Dzeko",
        "instagram_username": "Edin Dzeko"
      },
      "gurrantor": {
        "full_name": "Edin Dzeko",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 157,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Gideon Sam",
        "email": "sam@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Pending",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2"
      },
      "socialMedial": {
        "twitter_username": "@Sam_gideon",
        "facebook_username": "Gideon Sam",
        "instagram_username": "Edin Dzeko"
      },
      "gurrantor": {
        "full_name": "Edin Dzeko",
        "email": "gurrantor@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "edindzeko@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 158,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Itunu Oladejo",
        "email": "itunuoladejo@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Active",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@ola_itunu",
        "facebook_username": "Itunu Oladejo",
        "instagram_username": "Itunu Oladejo"
      },
      "gurrantor": {
        "full_name": "Itunu Oladejo",
        "email": "ola@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 159,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Modupe Oluwa",
        "email": "modupeoluwa@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@Modupe Oluwa",
        "facebook_username": "Modupe Oluwa",
        "instagram_username": "Modupe Oluwa"
      },
      "gurrantor": {
        "full_name": "Modupe Oluwa",
        "email": "modupe@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 160,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "king",
        "email": "king@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@king",
        "facebook_username": "king",
        "instagram_username": "king"
      },
      "gurrantor": {
        "full_name": "King God'swill",
        "email": "king@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 161,
      "personal_info": {
        "organization": "Hassan",
        "username": "User1",
        "email": "user1@lendsqr.com",
        "phoneNumber": "08078903721",
        "dateCreated": "May 1, 2020 10:00 AM",
        "status": "Inactive",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242781",
        "children": "1"
      },
      "socialMedial": {
        "twitter_username": "@user1",
        "facebook_username": "Bode Akinbade",
        "instagram_username": "user1"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor1@lendsqr.com",
        "phoneNumber": "08078903721",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user1@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 4000
      }
    },
    {
      "id": 162,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Debby",
        "email": "user2@lendsqr.com",
        "phoneNumber": "08078903722",
        "dateCreated": "May 2, 2020 10:00 AM",
        "status": "Active",
        "maritalStatus": "Married",
        "gender": "Female",
        "bvn": "074735242782",
        "children": "2"
      },
      "socialMedial": {
        "twitter_username": "@user2",
        "facebook_username": "User2",
        "instagram_username": "user2"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor2@lendsqr.com",
        "phoneNumber": "08078903722",
        "relationships": "brother"
      },
      "educations": {
        "level": "M.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user2@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 8000
      }
    },
    {
      "id": 163,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Bode Akinbade",
        "email": "user3@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@user3",
        "facebook_username": "User3",
        "instagram_username": "user3"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 164,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Bode Akinbade",
        "email": "user3@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@user3",
        "facebook_username": "User3",
        "instagram_username": "user3"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    },
    {
      "id": 164,
      "personal_info": {
        "organization": "Lendsqr",
        "username": "Bode Akinbade",
        "email": "user3@lendsqr.com",
        "phoneNumber": "08078903723",
        "dateCreated": "May 3, 2020 10:00 AM",
        "status": "Blacklisted",
        "maritalStatus": "Single",
        "gender": "Male",
        "bvn": "074735242783",
        "children": "3"
      },
      "socialMedial": {
        "twitter_username": "@user3",
        "facebook_username": "User3",
        "instagram_username": "user3"
      },
      "gurrantor": {
        "full_name": "Bode Akinbade",
        "email": "gurrantor3@lendsqr.com",
        "phoneNumber": "08078903723",
        "relationships": "sister"
      },
      "educations": {
        "level": "B.sc",
        "employment_status": "Employed",
        "sector": "FinTech",
        "duration": "2 years",
        "official_email": "user3@lendsqr.com",
        "income": "₦200,000.00- ₦400,000.00",
        "loan_repayment": 12000
      }
    }
  ]
}