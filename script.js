'use strict'

function linkedList () {
  let head = null
  let needSeparator = false
  return {

    toString () {
      let result = ''
      let current = head
      needSeparator = false

      while (current) {
        if (needSeparator) {
          result += ' -> '
        }
        result += current.getValue().toString()
        needSeparator = true
        current = current.getNextNode()
      }
      return result
    },
    append (value) {
      const newNode = createNode(value)

      // if head is falsy, makes the new node be the head of the list
      if (!head) {
        head = newNode
      } else {
        let current = head
        // checks if the current node has a next node. if it does, retrieve that next node otherwise exit the loop
        while (current.getNextNode()) {
          current = current.getNextNode()
        }
        current.setNextNode(newNode)
      }
    },
    prepend (value) {
      const newNode = createNode(value)
      newNode.setNextNode(head)
      head = newNode
    },
    size () {
      let count = 0
      let current = head

      while (current.getNextNode()) {
        count++
        current = current.getNextNode()
      }

      return count
    },
    head () {
      return head.getValue()
    },
    tail () {
      let current = head
      while (current.getNextNode()) {
        current = current.getNextNode()
      }

      return current.getValue()
    },
    at (index) {
      let current = head
      let count = 0
      if (index === 0) {
        return head.getValue()
      }
      while (count !== index) {
        count++
        current = current.getNextNode()
      }
      return current.getValue()
    },
    pop () {
      if (!head) {
        return null
      }
      if (!head.getNextNode()) {
        const value = head.getValue()
        head = null
        return value
      }
      let current = head
      let previous = null
      while (current.getNextNode()) {
        previous = current
        current = current.getNextNode()
      }
      const value = current.getValue()
      previous.setNextNode(null)
      return value
    },
    contains (value) {
      let current = head
      while (current.getNextNode()) {
        if (value === current.getValue()) {
          return true
        } else {
          current = current.getNextNode()
        }
      }
      return (value === current.getValue())
    },
    find (value) {
      let count = 0
      let current = head
      while (current) {
        if (value === current.getValue()) {
          return count
        } else {
          count++
          current = current.getNextNode()
        }
      }
      return undefined
    }
  }
}

function createNode (value = null, nextNode = null) {
  return {
    getValue () {
      return value
    },
    setValue (newValue) {
      value = newValue
    },
    getNextNode () {
      return nextNode
    },
    setNextNode (node) {
      nextNode = node
    }
  }
}
