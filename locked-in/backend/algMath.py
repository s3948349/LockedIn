import math

# calculate the dot product between 2 vectors
def calcDotProduct(vecA, vecB):
    dotProd = 0
    for x in range(len(vecA)):
        dotProd += vecA[x] * vecB[x]
    return dotProd

# calculate the magnitude of a given vector
def calcMagnitude(vecA):
    value = 0
    for x in vecA:
        value += x**2

    value = math.sqrt(value)
    return value

#
def boostVar(mag):
    toBoost = 0
    if mag == 1:
        toBoost = 1
    elif mag == 2:
        toBoost = 0.5
    elif mag == 3:
        toBoost = 0.25

    return toBoost

# calculate the
def calcCosineSimilarity(userA, userB, ):
    metricA = []
    metricB = []
    isHybrid = False
    isOpposite = False
    ls = [userA, userB]
    similarity = 0

    for user in ls:
        if (user["platform"][0] and user["platform"][1]):
            isHybrid = True

    if (not isHybrid) and (userA["platform"][0] == userB["platform"][1]):
        isOpposite = True

    if not isOpposite:
        for value in userA.values()[:-2]:
            for listValue in value:
                metricA.append(listValue)
        for value in userB.values()[:-2]:
            for listValue in value:
                metricB.append(listValue)

        sumNumerator = calcDotProduct(metricA, metricB)

        magA = calcMagnitude(metricA)
        magB = calcMagnitude(metricB)

        sumDenominator = magA * magB

        similarity = sumNumerator / sumDenominator
        similarity = abs(similarity)
    return similarity

