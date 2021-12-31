import instaloader
L = instaloader.Instaloader()
L.interactive_login('@cyberr_ghostt') 
 
profile = instaloader.Profile.from_username(L.context, "cyberr_ghostt")

# get_followers()
# get_followees()
for followee in profile.get_followers():
    username = followee.username
    print(username)
    # print(followee)
    
    
    




