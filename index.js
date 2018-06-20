expect.companyName.to.equal('Scuber');

expect(function () { companyName = 'specialCompany' }).to.throw(TypeError);

