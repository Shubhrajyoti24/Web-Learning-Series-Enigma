function formValidation()
{
    var phnum = document.registration.phonenum;
    var branch = document.registration.branchname;
    var domain = document.registration.domain_name;
    var mail = document.registration.email; 

    if(phonenumber(phnum))
    {
    if(alphanumeric(uadd))
        { 
            if(branchselect(branch))
            {
                if(domainselect(domain))
                {
                    if(ValidateEmail(mail))
                    {
                    } 
                }
            } 
        }
    }
}


function phonenumber(phnum)
{
    var phoneno = /^\(?([0-9]{3})\)?[ ]?([0-9]{3})[ ]?([0-9]{4})$/;
    if(phnum.value.match(phoneno))
            {
                return true;
            }
        else
            {
                alert("Invalid phone number!!");
                return false;
            }
}


function branchselect(branch)
{
    if(branch.value == "Default")
    {
    alert('Select your branch from the list');
    branch.focus();
    return false;
    }
    else
    {
    return true;
    }
}


function domainselect(domain)
{
    if(domain.value == "Default")
    {
    alert('Select your domain from the list');
    domain.focus();
    return false;
    }
    else
    {
        return true;
    }
}


function ValidateEmail(mail)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(mail.value.match(mailformat))
    {
    return true;
    }
    else
    {
    alert("Invalid email address!!");
    mail.focus();
    return false;
    }
}

