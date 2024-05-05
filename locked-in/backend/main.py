from algMath import *
import csv

# user vector arrays.

# create an array of users that doesn't include the user being matched against
def collateUsers(userID):
    userArr = []
    header = None
    found = False
    with open("data.csv", newline="") as csvfile:
        rdr = csv.reader(csvfile)
        for row in rdr:
            if (header is None):
                header = row
                continue
            if (int(row[0]) == userID):
                found = True
                continue
            userArr.append(row)
    if not found:
        userArr = []
        print("USER", userID, "NOT FOUND.")
    return userArr

# find most popular weight (machine learning component)
def findGlobalWeight():
    globalPref = "uni"
    header = None
    with open("globaldata.csv", newline="") as csvfile:
        rdr = csv.reader(csvfile)
        count = 0
        for row in rdr:
            currMax = 0
            if header is None:
                header = row
                continue
            for val in row[1:]:
                if (int(val) > currMax):
                    currMax = int(val)
                    globalPref = header[count + 1]
                count += 1
    return globalPref

# turn user array into a 3D vector inside a dictionary
def create3DVectors(user):
    headers = ["id","uni","goal","level","discipline","platform","preferences"]

    options = [
        ["Monash", "Deakin", "Swinburne", "Latrobe", "UniMelb", "RMIT"],
        ["STEM", "Arts", "Law", "Design", "Business and Econ"],
        ["Undergrad", "Postgrad", "Doctorate"],
        ["Project work", "General study", "Community building", "Other"],
        ["Physical", "Virtual", "Hybrid", "Other"]
    ]

    vec = {
        "id" : 0,
        "uni" : [0,0,0,0,0,0],
        "goal" : [0,0,0],
        "level" : [0,0,0],
        "discipline" : [0,0,0,0,0,0,0,0,0],
        "platform" : [0,0],
        "preferences" : ["", "goal"]
    }

    i = 1
    optI = 0
    vec["id"] = int(user[0])

    for x in user:
        if i == 6:
            vec[headers[i]][0] = x
            break
        ynum = 0
        for y in options[optI]:
            print(x, options[optI], headers[i])
            if x == y:
                vec[headers[i]][ynum] += 1
                break
            ynum += 1
        if optI < 4: optI += 1
        i += 1

    print(vec)
    return vec

def getSimilarityArr(userID):
    similarArr = {}
    currUserArr = []
    tempArr = collateUsers(userID)
    header = None
    with open("data.csv", newline="") as csvfile:
        rdr = csv.reader(csvfile)
        for row in rdr:
            if (header is None):
                header = row
                continue
            if (int(row[0]) == userID):
                currUserArr = row
    vecUser = create3DVectors(currUserArr)
    vecArr = []
    for user in tempArr:
        vecArr.append(create3DVectors(user))

    for vecFriend in vecArr:
        similarArr[vecFriend["id"]] = calcCosineSimilarity(vecUser, vecFriend)

    return similarArr

# similarity = calcCosineSimilarity()
# print(f"{similarity:.4f}")

findGlobalWeight()
getSimilarityArr(101)
