// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: learnstarport/ext_transaction.proto

package types

import (
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type ExtTransaction struct {
	Creator string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	Id      uint64 `protobuf:"varint,2,opt,name=id,proto3" json:"id,omitempty"`
	Chain   string `protobuf:"bytes,3,opt,name=chain,proto3" json:"chain,omitempty"`
	To      string `protobuf:"bytes,4,opt,name=to,proto3" json:"to,omitempty"`
	From    string `protobuf:"bytes,5,opt,name=from,proto3" json:"from,omitempty"`
	Amount  string `protobuf:"bytes,6,opt,name=amount,proto3" json:"amount,omitempty"`
	Txid    string `protobuf:"bytes,7,opt,name=txid,proto3" json:"txid,omitempty"`
}

func (m *ExtTransaction) Reset()         { *m = ExtTransaction{} }
func (m *ExtTransaction) String() string { return proto.CompactTextString(m) }
func (*ExtTransaction) ProtoMessage()    {}
func (*ExtTransaction) Descriptor() ([]byte, []int) {
	return fileDescriptor_522ca3e33edc18bc, []int{0}
}
func (m *ExtTransaction) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *ExtTransaction) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_ExtTransaction.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *ExtTransaction) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ExtTransaction.Merge(m, src)
}
func (m *ExtTransaction) XXX_Size() int {
	return m.Size()
}
func (m *ExtTransaction) XXX_DiscardUnknown() {
	xxx_messageInfo_ExtTransaction.DiscardUnknown(m)
}

var xxx_messageInfo_ExtTransaction proto.InternalMessageInfo

func (m *ExtTransaction) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *ExtTransaction) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *ExtTransaction) GetChain() string {
	if m != nil {
		return m.Chain
	}
	return ""
}

func (m *ExtTransaction) GetTo() string {
	if m != nil {
		return m.To
	}
	return ""
}

func (m *ExtTransaction) GetFrom() string {
	if m != nil {
		return m.From
	}
	return ""
}

func (m *ExtTransaction) GetAmount() string {
	if m != nil {
		return m.Amount
	}
	return ""
}

func (m *ExtTransaction) GetTxid() string {
	if m != nil {
		return m.Txid
	}
	return ""
}

func init() {
	proto.RegisterType((*ExtTransaction)(nil), "turtlebasket.learnstarport.learnstarport.ExtTransaction")
}

func init() {
	proto.RegisterFile("learnstarport/ext_transaction.proto", fileDescriptor_522ca3e33edc18bc)
}

var fileDescriptor_522ca3e33edc18bc = []byte{
	// 265 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x54, 0x90, 0xbd, 0x4e, 0xc3, 0x30,
	0x14, 0x85, 0xe3, 0x90, 0xa6, 0xc2, 0x43, 0x07, 0xab, 0x42, 0x16, 0x83, 0x55, 0xc1, 0x92, 0x85,
	0x78, 0x60, 0x65, 0x42, 0xe2, 0x05, 0x2a, 0xc4, 0xc0, 0x82, 0x9c, 0xc4, 0xa4, 0x16, 0x8d, 0x6f,
	0xe4, 0xdc, 0x48, 0xe1, 0x2d, 0x78, 0x04, 0x1e, 0x87, 0xb1, 0x23, 0x23, 0x4a, 0x5e, 0x04, 0xc5,
	0xe1, 0xa7, 0xd9, 0xce, 0x39, 0x3a, 0xe7, 0x4a, 0xf7, 0xa3, 0x97, 0x7b, 0xad, 0x9c, 0x6d, 0x50,
	0xb9, 0x1a, 0x1c, 0x4a, 0xdd, 0xe1, 0x13, 0x3a, 0x65, 0x1b, 0x95, 0xa3, 0x01, 0x9b, 0xd6, 0x0e,
	0x10, 0x58, 0x82, 0xad, 0xc3, 0xbd, 0xce, 0x54, 0xf3, 0xa2, 0x31, 0x9d, 0x2d, 0xe6, 0xee, 0x7c,
	0x5d, 0x42, 0x09, 0x7e, 0x24, 0x47, 0x35, 0xed, 0x2f, 0xde, 0x09, 0x5d, 0xdd, 0x75, 0x78, 0xff,
	0x7f, 0x98, 0x71, 0xba, 0xcc, 0x9d, 0x56, 0x08, 0x8e, 0x93, 0x0d, 0x49, 0x4e, 0xb7, 0xbf, 0x96,
	0xad, 0x68, 0x68, 0x0a, 0x1e, 0x6e, 0x48, 0x12, 0x6d, 0x43, 0x53, 0xb0, 0x35, 0x5d, 0xe4, 0x3b,
	0x65, 0x2c, 0x3f, 0xf1, 0xbd, 0xc9, 0x8c, 0x2d, 0x04, 0x1e, 0xf9, 0x28, 0x44, 0x60, 0x8c, 0x46,
	0xcf, 0x0e, 0x2a, 0xbe, 0xf0, 0x89, 0xd7, 0xec, 0x8c, 0xc6, 0xaa, 0x82, 0xd6, 0x22, 0x8f, 0x7d,
	0xfa, 0xe3, 0xc6, 0x2e, 0x76, 0xa6, 0xe0, 0xcb, 0xa9, 0x3b, 0xea, 0xdb, 0x87, 0x8f, 0x5e, 0x90,
	0x43, 0x2f, 0xc8, 0x57, 0x2f, 0xc8, 0xdb, 0x20, 0x82, 0xc3, 0x20, 0x82, 0xcf, 0x41, 0x04, 0x8f,
	0x37, 0xa5, 0xc1, 0x5d, 0x9b, 0xa5, 0x39, 0x54, 0xf2, 0x98, 0x83, 0xf4, 0x9f, 0x5f, 0xfd, 0xa1,
	0xeb, 0xe4, 0x1c, 0x25, 0xbe, 0xd6, 0xba, 0xc9, 0x62, 0x4f, 0xe0, 0xfa, 0x3b, 0x00, 0x00, 0xff,
	0xff, 0xea, 0x7f, 0x6d, 0x58, 0x68, 0x01, 0x00, 0x00,
}

func (m *ExtTransaction) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *ExtTransaction) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *ExtTransaction) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Txid) > 0 {
		i -= len(m.Txid)
		copy(dAtA[i:], m.Txid)
		i = encodeVarintExtTransaction(dAtA, i, uint64(len(m.Txid)))
		i--
		dAtA[i] = 0x3a
	}
	if len(m.Amount) > 0 {
		i -= len(m.Amount)
		copy(dAtA[i:], m.Amount)
		i = encodeVarintExtTransaction(dAtA, i, uint64(len(m.Amount)))
		i--
		dAtA[i] = 0x32
	}
	if len(m.From) > 0 {
		i -= len(m.From)
		copy(dAtA[i:], m.From)
		i = encodeVarintExtTransaction(dAtA, i, uint64(len(m.From)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.To) > 0 {
		i -= len(m.To)
		copy(dAtA[i:], m.To)
		i = encodeVarintExtTransaction(dAtA, i, uint64(len(m.To)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.Chain) > 0 {
		i -= len(m.Chain)
		copy(dAtA[i:], m.Chain)
		i = encodeVarintExtTransaction(dAtA, i, uint64(len(m.Chain)))
		i--
		dAtA[i] = 0x1a
	}
	if m.Id != 0 {
		i = encodeVarintExtTransaction(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x10
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintExtTransaction(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintExtTransaction(dAtA []byte, offset int, v uint64) int {
	offset -= sovExtTransaction(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *ExtTransaction) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovExtTransaction(uint64(l))
	}
	if m.Id != 0 {
		n += 1 + sovExtTransaction(uint64(m.Id))
	}
	l = len(m.Chain)
	if l > 0 {
		n += 1 + l + sovExtTransaction(uint64(l))
	}
	l = len(m.To)
	if l > 0 {
		n += 1 + l + sovExtTransaction(uint64(l))
	}
	l = len(m.From)
	if l > 0 {
		n += 1 + l + sovExtTransaction(uint64(l))
	}
	l = len(m.Amount)
	if l > 0 {
		n += 1 + l + sovExtTransaction(uint64(l))
	}
	l = len(m.Txid)
	if l > 0 {
		n += 1 + l + sovExtTransaction(uint64(l))
	}
	return n
}

func sovExtTransaction(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozExtTransaction(x uint64) (n int) {
	return sovExtTransaction(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *ExtTransaction) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowExtTransaction
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: ExtTransaction: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: ExtTransaction: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowExtTransaction
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthExtTransaction
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthExtTransaction
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowExtTransaction
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Id |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Chain", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowExtTransaction
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthExtTransaction
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthExtTransaction
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Chain = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field To", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowExtTransaction
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthExtTransaction
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthExtTransaction
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.To = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field From", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowExtTransaction
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthExtTransaction
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthExtTransaction
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.From = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Amount", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowExtTransaction
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthExtTransaction
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthExtTransaction
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Amount = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Txid", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowExtTransaction
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthExtTransaction
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthExtTransaction
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Txid = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipExtTransaction(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthExtTransaction
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipExtTransaction(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowExtTransaction
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowExtTransaction
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowExtTransaction
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthExtTransaction
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupExtTransaction
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthExtTransaction
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthExtTransaction        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowExtTransaction          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupExtTransaction = fmt.Errorf("proto: unexpected end of group")
)
