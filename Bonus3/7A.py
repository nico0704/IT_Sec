Zx = 1783746462
INITIAL = 4226801756
reg = INITIAL
random_32 = 0
bit = 0

counter = -32 
# initialize counter with -32 because first valid (pseudo) random number is calulated after 32 iterations
# until then it's just a 32-bit number with the calculated new bits shifted to the beginning of the number following by i zeros
# (i being the amount of iterations)
# e.g: 10000000000000000000000000000000 after the first iteration

while True:
    counter += 1
    bit = (reg ^ 
    (reg >> 3) ^ 
    (reg >> 6) ^ 
    (reg >> 7) ^ 
    (reg >> 11) ^ 
    (reg >> 12) ^
    (reg >> 14) ^ 
    (reg >> 16) ^ 
    (reg >> 17) ^ 
    (reg >> 19) ^ 
    (reg >> 20) ^ 
    (reg >> 21)) & 1
    reg = (reg >> 1) | (bit << 23)
    random_32 >>= 1 #right-shift number by 1 to "make space" for the new calculated bit
    random_32 = (bit << 31) | random_32 #add new bit as the most significant bit of a 32-bit number   
    if (random_32 == Zx):
        print("FOUND!!!")
        print("{0:b}".format(random_32))
        break

print("Counter: " + str(counter))
print("Wanted number (Zx)      : " + str(Zx))
print("Found number (random_32): " + str(random_32) + " after " + str(counter) + " valid iterations.")

#7182333