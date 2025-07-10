def add_octet(l1,l2):
    ans = []
    _ = 0
    id = 7
    if type(l1) is list and type(l2) is list:
        for i in range(len(l1)):
            if l1[id] and l2[id] and _ == 1:
                ans.insert(id, 1)
            elif l1[id] == 1 and l2[id] == 1 or l1[id] == 1 and _ == 1 or l2[id] == 1 and _ == 1:
                ans.insert(id, 0)
                _ = 1
            elif l1[id] == 1 and l2[id] == 0 or l1[id] == 0 and l2[id] == 1 or l1[id] == 0 and l2[id] == 0 and _ == 1:
                ans.insert(id, 1)      
            else:
                ans.insert(id, 0)
        return ans
